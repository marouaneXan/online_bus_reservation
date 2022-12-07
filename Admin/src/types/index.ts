export interface Bus {
  _id:string;
  car_name: string;
  nbr_places: Number;
  car_image: string;
}
export interface Company {
  _id:string;
  company_name: string;
}
export interface TripState {
  _id: string;
  departure_city: string;
  arrival_city: string;
  departure_date: string;
  departure_time: string;
  arrival_time: string;
  car: Bus;
  // break_points: BreakPoint;
  company: Company;
  price:number,
  distance:string
}
export interface Client{
  _id:string
  genre:string
  nom:string
  prenom:string
  email:string
  date_naissance:string
  tel:string
  adress:string
  ville:string
  nationalite:string
}
export interface Reservation{
  _id:string
  reservation_date:string
  reservation_time:string
  trip:TripState
  client:Client
}
