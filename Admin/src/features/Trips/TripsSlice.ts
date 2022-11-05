import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
interface Bus {
  car_name: string;
  nbr_places: Number;
  car_image: string;
}
interface BreakPoint {
  arrival_time: string;
  city_name: string;
}
interface Company {
  company_name: string;
}
interface TripState {
  departure_city: string;
  arrival_city: string;
  departure_date: Date;
  departure_time: string;
  arrival_time: string;
  car: Bus;
  break_points: BreakPoint;
  company: Company;
}
