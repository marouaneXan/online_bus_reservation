const asyncHandler = require("express-async-handler");
const Reservation = require("../Models/Reservation");
const Trip = require("../Models/Trip");
const Client = require("../Models/Client");
const Car = require("../Models/Car");

//@desc GET Reservations
//@route /api/v1/reservation
//@access private
const getAllReservations = asyncHandler(async (req, res) => {
  const reservations = await Reservation.find();
  reservations.length
    ? res.status(200).json(reservations)
    : res.status(400).json({
        message: "There is no reservations yet",
      });
});

//@desc GET Reservations
//@route /api/v1/reservation
//@access private
const getReservationDetails = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.reservation_id);
  res.status(400).json(reservation)
});
//@desc GET Reservations single client
//@route /api/v1/reservations/client_id
//@access private
const getClientReservations = asyncHandler(async (req, res) => {
  const client_id = req.params.client_id;
  if (client_id) {
    const reservations = await Reservation.find({ client: client_id });
    reservations.length
      ? res.status(200).json(reservations)
      : res.status(400).json({
          message: "There is no reservations for this client",
        });
  } else {
    res.status(400);
    throw new Error("Client not found");
  }
});

//@desc POST Reservations
//@route /api/v1/reservation
//@access public
const makeReservation = asyncHandler(async (req, res) => {
  const time_now = new Date().toLocaleTimeString();
  const date_now = new Date().toLocaleDateString();
  const trip = await Trip.findById(req.params.trip_id);
  const client = await Client.findById(req.params.client_id);
  if (!trip || !client) {
    res.status(400);
    throw new Error("Reservation failed");
  }
  const reservation = await Reservation.create({
    reservation_date: date_now,
    reservation_time: time_now,
    trip: trip._id,
    client: client._id,
  });
  if (reservation) {
    res.status(200).json(reservation);
    const car = await Car.findById(trip.car);
    await Car.findByIdAndUpdate(trip.car, {
      nbr_places: car.nbr_places - 1,
    });
  } else res.status(400).json({ message: "Reservation failed" });
});

//@desc DELETE Reservations
//@route /api/v1/reservation/reservation_id/trip_id/client_id
//@access public
const cancelReservation = asyncHandler(async (req, res) => {
  const time_now = new Date().toLocaleTimeString();
  const reservation = await Reservation.findById(req.params.reservation_id);
  const trip = await Trip.findById(req.params.trip_id);
  const client = await Client.findById(req.params.client_id);
  if (!reservation || !trip || !client) {
    res.status(400);
    throw new Error("Canceling reservation failed :(");
  }
  const difference_time = diff(time_now, trip.departure_time);
  if (reservation.reservation_date < trip.departure_date) {
    reservation.remove();
    const car = await Car.findById(trip.car);
    await Car.findByIdAndUpdate(trip.car, {
      nbr_places: car.nbr_places + 1,
    });
    res.status(200).json({ message: "Canceling reservation successffuly" });
  } else if (
    reservation.reservation_date === trip.departure_date &&
    difference_time > "01:00:00"
  ) {
    reservation.remove();
    const car = await Car.findById(trip.car);
    await Car.findByIdAndUpdate(trip.car, {
      nbr_places: car.nbr_places + 1,
    });
    res.status(200).json({ message: "Canceling reservation successffuly" });
  } else {
    res.status(400);
    throw new Error("You cannot cancel this reservation");
  }
});

// difference btween two times
function diff(start, end) {
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0, 0, 0, start[0], start[1], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);

  return (
    (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes
  );
}
module.exports = {
  getAllReservations,
  makeReservation,
  cancelReservation,
  getClientReservations,
  getReservationDetails
};
