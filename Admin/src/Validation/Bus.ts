import * as yup from "yup";
export const busSchema = yup.object().shape({
  car_name: yup.string().required(),
  nbr_places: yup.string().required(),
});
