import * as yup from 'yup'
export const RegisterSchema=yup.object().shape({
    genre:yup.string().required(),
    nom:yup.string().required(),
    prenom:yup.string().required(),
    email:yup.string().email().required(),
    date_naissance:yup.string().required(),
    tel:yup.string().required(),
    adress:yup.string().required(),
    ville:yup.string().required(),
    nationalite:yup.string().required(),
    password:yup.string().min(4).max(10).required()
})