const asyncHandler = require("express-async-handler");
const Trip = require("../Models/Trip");
const Car = require("../Models/Car");
const Company = require("../Models/Company");

//@desc GET Trips
//@route /api/v1/trips
//@access public
const getAllTrips = asyncHandler(async (req, res) => {
  const trips = await Trip.find();
  res.status(200).json(trips);
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
  if(!company){
    res.status(400);
    throw new Error("Company not found");
  }
  const newTrip = await Trip.create({
    departure_city,
    arrival_city,
    departure_date,
    departure_time,
    arrival_time,
    car: car._id,
    company:company._id,
    break_point,
    price,
    distance,
  });
  if (newTrip) res.status(201).json(newTrip);
});

//@desc PUT  Update trip
//@route /api/v1/trips/:trip_id
//@access private
const updateTrip = asyncHandler(async (req, res) => {
  const trip = await Trip.findById(req.params.id);
  if (!trip) {
    throw new Error("Hotel not found");
  }
  const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "Trip updated successfully",
    updatedTrip,
  });
});
module.exports = {
  getAllTrips,
  addTrip,
  updateTrip
};
