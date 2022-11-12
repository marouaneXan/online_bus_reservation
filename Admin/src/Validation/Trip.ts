import * as yup from "yup";
export const tripSchema = yup.object().shape({
  departure_city: yup.string().required(),
  arrival_city: yup.string().required(),
  departure_date: yup.string().required(),
  departure_time: yup.string().required(),
  company: yup.string().required(),
  arrival_time: yup.string().required(),
  car: yup.string().required(),
//   break_point: yup.object({
//     arrival_time:yup.string().required(),
//     city_name:yup.string().required()
//   }).required(),
//   price: yup.number().required(),
//   distance: yup.string().required(),
});
