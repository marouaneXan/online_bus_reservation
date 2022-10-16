const asyncHandler = require("express-async-handler");
const Car = require("../Models/Car");
//@desc POST addCar
//@route /api/v1/cars
//@access private
const addCar = asyncHandler(async (req, res) => {
  const { car_name, nbr_places, car_image } = req.body;
  if (!car_name || !nbr_places || !car_image) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const newCar = await Car.create(req.body);
  if (newCar) res.status(200).json(newCar);
});

//@desc GET getAllCar
//@route /api/v1/cars
//@access private
const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
});

//@desc PUT  Update Car
//@route /api/v1/cars/:car_id
//@access private
const updateCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.car_id);
  if (!car) {
    throw new Error("Car not found");
  }
  const updatedCar = await Car.findByIdAndUpdate(req.params.car_id, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "Car updated successfully",
    updatedCar,
  });
});

//@desc DELETE Car
//@route /api/v1/cars/:car_id
//@access private
const deleteCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.car_id);
  //delete car
  car.remove();
  res.status(200).json({
    message: "Car deleted successfully",
  });
});
module.exports = {
  addCar,
  getAllCars,
  updateCar,
  deleteCar
};
