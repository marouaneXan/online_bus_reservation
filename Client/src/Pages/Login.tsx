import React, { useContext, useEffect } from "react";
import busVid from "../assets/landing_page_vd.mp4";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "../Components/Formik/TextField";
import { LoginSchema } from "../Validation/Login";
import { AuthContext } from "../Context/AuthContext";
import Spinner from "../Components/Layouts/Spinner";
import { token } from "../Config/Token";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    token ? navigate("/") : "";
  }, [token]);
  const { login, loading }: any = useContext(AuthContext);
  const values: object = {
    email: "",
    password: "",
  };
  const onSubmit = (values: object) => {
    const { ...data } = values;
    login(data);
  };
  return (
    <Formik
      initialValues={values}
      validationSchema={LoginSchema}
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
            <h1 className="text-3xl md:text-4xl font-bold">Login</h1>
            <Form className="flex flex-col space-y-2 items-center max-w-[500px] mx-auto w-full border p-8 rounded-md text-black bg-gray-100/90">
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
                {loading ? <Spinner /> : "Login"}
              </button>
              <div className="mt-6 text-grey-dark">
                I do not have an account?
                <Link className="text-blue-600 hover:underline" to="/">
                  Register
                </Link>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
