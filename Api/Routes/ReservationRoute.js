const express = require("express");
const {
  getAllReservations,
  makeReservation,
  cancelReservation,
  getClientReservations,
  getReservationDetails,
} = require("../Controllers/ReservationController");
const { protectClient } = require("../Middleware/ClientMiddleware");
const { protectAdmin } = require("../Middleware/AdminMiddleware");
const router = express.Router();
router.get("/", getAllReservations);
router.get("/:client_id", getClientReservations);
router.get("/:reservation_id", getReservationDetails);
router.post("/:trip_id/:client_id", makeReservation);
router.delete("/:reservation_id/:trip_id/:client_id", cancelReservation);

// router.get('/',protectAdmin,getAllReservations)
// router.get('/:client_id', protectClient,getClientReservations)
// router.get('/:reservation_id', protectAdmin,getReservationDetails)
// router.post('/:trip_id/:client_id',protectClient,makeReservation)
// router.delete('/:reservation_id/:trip_id/:client_id',protectClient,cancelReservation)
module.exports = router;
