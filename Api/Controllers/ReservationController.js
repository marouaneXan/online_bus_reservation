const asyncHandler = require("express-async-handler");
const Reservation = require("../Models/Reservation");

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
module.exports = {
  getAllReservations,
};
