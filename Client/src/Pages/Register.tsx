import React, { useContext, useEffect } from "react";
import busVid from "../assets/landing_page_vd.mp4";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import TextField from "../Components/Formik/TextField";
import { RegisterSchema } from "../Validation/Register";
import RadioField from "../Components/Formik/RadioField";
import { AuthContext } from "../Context/AuthContext";
import Spinner from "../Components/Layouts/Spinner";
import { token } from "../Config/Token";
const Register = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    token ? navigate('/') : ''
  },[token])
  const { register, success, error, loading }: any = useContext(AuthContext);
  const values: object = {
    genre: "",
    nom: "",
    prenom: "",
    email: "",
    date_naissance: "",
    tel: "",
    adress: "",
    ville: "",
    nationalite: "",
    password: "",
  };
  const onSubmit = (values: object) => {
    const { ...data } = values;
    register(data);
  };
  return (
    <Formik
      initialValues={values}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <div className="w-full h-screen relative">
          <video
            className="w-full h-full object-cover"
            src={busVid}
            autoPlay
            loop
            muted
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
          <div className="absolute top-0 w-full h-full flex flex-col space-y-6 justify-center text-center text-white p-4">
            <h1 className="text-3xl md:text-4xl font-bold">Register</h1>
            <Form className="flex flex-col space-y-2 items-center max-w-[500px] mx-auto w-full border p-8 rounded-md text-black bg-gray-100/90">

              <div className="flex">
                <div className="flex items-center mr-4">
                  <RadioField
                    id="inline-radio"
                    type="radio"
                    name="genre"
                    value="madame"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-radio"
                    className="ml-2 text-sm font-medium text-gray-500"
                  >
                    Madame
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <RadioField
                    id="inline-2-radio"
                    type="radio"
                    name="genre"
                    value="mister"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-2-radio"
                    className="ml-2 text-sm font-medium text-gray-500"
                  >
                    Mister
                  </label>
                </div>
              </div>

              <div className="w-full flex space-x-1">
                <TextField
                  name="nom"
                  className="border rounded-md p-2 w-full"
                  type="text"
                  placeholder="First name"
                />
                <TextField
                  name="prenom"
                  className="border rounded-md p-2 w-full"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div className="w-full flex space-x-1">
                <TextField
                  name="date_naissance"
                  className="border rounded-md p-2 w-full"
                  type="date"
                  placeholder="Birthday"
                />
                <TextField
                  name="tel"
                  className="border rounded-md p-2 w-full"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <TextField
                name="nationalite"
                className="border rounded-md p-2 w-full"
                type="text"
                placeholder="Nationality"
              />
              <TextField
                name="ville"
                className="border rounded-md p-2 w-full"
                type="text"
                placeholder="City"
              />
              <TextField
                name="adress"
                className="border rounded-md p-2 w-full"
                type="text"
                placeholder="Adress"
              />
              <TextField
                name="email"
                className="border rounded-md p-2 w-full"
                type="text"
                placeholder="Email"
              />
              <TextField
                name="password"
                className="border rounded-md p-2 w-full"
                type="password"
                placeholder="password"
              />
              <button
                disabled={loading}
                type="submit"
                className="p-3 w-full border bg-gradient-to-r text-white rounded-md from-[#5651e5] to-[#709dff]"
              >
                {loading ? <Spinner /> : "Register"}
              </button>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <Link className="text-blue-600 hover:underline" to="/login">
                  Log in
                </Link>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
