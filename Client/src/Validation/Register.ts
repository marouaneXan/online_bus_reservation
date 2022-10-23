import * as yup from 'yup'
export const RegisterSchema=yup.object().shape({
    gendar:yup.string().required(),
    first_name:yup.string().required(),
    last_name:yup.string().required(),
    birthday:yup.string().required(),
    city:yup.string().required(),
    nationality:yup.string().required(),
    phone:yup.string().required(),
    adress:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().min(4).max(10).required()
})