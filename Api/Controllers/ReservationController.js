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
  // const time_now = new Date().toLocaleTimeString();
  // const date_now = new Date().toLocaleDateString();
  const reservation = await Reservation.findById(req.params.reservation_id);
  const trip = await Trip.findById(req.params.trip_id);
  const client = await Client.findById(req.params.client_id);
  if (!reservation || !trip || !client) {
    res.status(400);
    throw new Error("Canceling reservation failed :(");
  }
  reservation.remove();
  const car = await Car.findById(trip.car);
  await Car.findByIdAndUpdate(trip.car, {
    nbr_places: car.nbr_places + 1,
  });
  res.status(200).json({
    message: "Reservation canceling successfully",
  });
  // if (reservation.reservation_date > date_now) {
  //   reservation.remove();
  //   const car = await Car.findById(trip.car);
  //   await Car.findByIdAndUpdate(trip.car, {
  //     nbr_places: car.nbr_places + 1,
  //   });
  // } else if (
  //   reservation.reservation_date === date_now &&
  //   reservation.reservation_time - trip.departure_time > "01:00:00" &&
  //   time_now - trip.departure_time > "01:00:00"
  // ) {
  //   reservation.remove();
  //   const car = await Car.findById(trip.car);
  //   await Car.findByIdAndUpdate(trip.car, {
  //     nbr_places: car.nbr_places + 1,
  //   });
  // } else {
  //   res.status(400);
  //   throw new Error("You cannot cancel this reservation");
  // }
});
module.exports = {
  getAllReservations,
  makeReservation,
  cancelReservation,
};
