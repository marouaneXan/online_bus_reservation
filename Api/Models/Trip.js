const mongoose = require("mongoose");
const tripSchema = mongoose.Schema(
  {
    departure_city: {
      type: String,
      reqired: [true, "Please add a Depature city Field"],
    },
    arrival_city: {
      type: String,
      reqired: [true, "Please add a Arrival city Field"],
    },
    departure_date: {
      type: String,
      reqired: [true, "Please add a departure date Field"],
    },
    departure_time: {
      type: String,
      reqired: [true, "Please add a Depature time Field"],
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      reqired: [true, "Please add a company Field"],
      ref:'Company'
    },
    arrival_time: {
      type: String,
      reqired: [true, "Please add a Arrival time Field"],
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      reqired: true,
      ref: "Car",
    },
    break_point: [
      {
        arrival_time: {
          type: String,
          required: [true, "Please add arrival time field"],
        },
        city_name: {
          type: String,
          required: [true, "Please add a city name field"],
        },
      },
    ],
    price: {
      type: Number,
      reqired: [true, "Please add a Price time Field"],
    },
    distance: {
      type: String,
      reqired: [true, "Please add a Distance Field"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Trip", tripSchema);
