const asyncHandler = require("express-async-handler");
const Trip = require("../Models/Trip");
const Car = require("../Models/Car");
const Company = require("../Models/Company");

//@desc GET search Trips
//@route /api/v1/trips?queries
//@access public
const searchTrip = asyncHandler(async (req, res) => {
  const time_now = new Date().toLocaleTimeString();
  const { ...others } = req.query;
  const trips = await Trip.find({ ...others }).populate(["car", "company"]);
  const searchTrips = [];
  if (trips.length) {
    for (let i = 0; i < trips.length; i++) {
      if (trips[i].departure_time > time_now) {
        searchTrips.push(trips[i]);
      }
    }
    searchTrips.length
      ? res.status(200).json(searchTrips)
      : res.status(404).json({ message: "No bus are available for this trip"});
  } else {
    res.status(404).json({
      message: "No bus are available for this trip",
    });
  }
});

//@desc GET Trips
//@route /api/v1/trips
//@access public
const getAllTrips = asyncHandler(async (req, res) => {
  const trips = await Trip.find().sort({createdAt:-1}).populate(["car", "company"]);

  trips.length
    ? res.status(200).json(trips)
    : res.status(400).json({
        message: "There is no trip",
      });
});

//@desc GET tripDetails
//@route /api/v1/trips/trip_id
//@access private
const tripDetails = asyncHandler(async (req, res) => {
  const trip = await Trip.findById(req.params.trip_id).populate([
    "car",
    "company",
  ]);
  res.status(200).json(trip);
});

//@desc POST Trips
//@route /api/v1/trips
//@access public
const addTrip = asyncHandler(async (req, res) => {
  const {
    departure_city,
    arrival_city,
    departure_date,
    departure_time,
    arrival_time,
    break_point,
    price,
    distance,
  } = req.body;
  if (
    !departure_city ||
    !arrival_city ||
    !departure_date ||
    !departure_time ||
    !arrival_time ||
    !price ||
    !distance
  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const car = await Car.findById(req.params.car_id);
  const company = await Company.findById(req.params.company_id);

  if (!car) {
    res.status(400);
    throw new Error("Car not found");
  }
  if (!company) {
    res.status(400);
    throw new Error("Company not found");
  }
  const newTrip = await Trip.create({
    departure_city,
    arrival_city,
    departure_time,
    departure_date,
    arrival_time,
    car: car._id,
    company: company._id,
    break_point,
    price,
    distance,
  });
  if (newTrip) res.status(201).json({
    message:"Add new trip successfully"
  });
});

//@desc PUT  Update trip
//@route /api/v1/trips/:trip_id
//@access private
const updateTrip = asyncHandler(async (req, res) => {
  const trip = await Trip.findById(req.params.trip_id);
  if (!trip) {
    throw new Error("Trip not found");
  }
  const updatedTrip = await Trip.findByIdAndUpdate(
    req.params.trip_id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({
    message: "Trip updated successfully",
    updatedTrip,
  });
});

//@desc DELETE Trip
//@route /api/v1/trips/:trip_id
//@access private
const deleteTrip = asyncHandler(async (req, res) => {
  const trip = await Trip.findById(req.params.trip_id);
  //delete trip
  trip.remove();
  res.status(200).json({
    message: "Trip deleted successfully",
  });
});
module.exports = {
  getAllTrips,
  searchTrip,
  addTrip,
  updateTrip,
  deleteTrip,
  tripDetails,
};
