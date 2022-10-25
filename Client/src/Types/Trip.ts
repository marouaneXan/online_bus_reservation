import { Company } from "./Company"
import { Car } from "./Car"
import { BreakPoint } from "./BreakPoint"
export interface Tripe{
    departure_city:string,
    arrival_city:string,
    departure_date:string,
    departure_time:string,
    company:Company,
    arrival_time:string,
    car:Car,
    break_point:BreakPoint,
    price:number,
    distance:string
}