import * as yup from 'yup'
export const SearchTripSchema=yup.object().shape({
    departure_city:yup.string().required(),
    arrival_city:yup.string().required(),
    departure_date:yup.string().required(),
})