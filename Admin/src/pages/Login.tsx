import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import TextField from "../components/Formik/TextField";
import { Formik, Form } from "formik";
import { LoginSchema } from "../Validation/Login";
import { AuthContext } from "../Context/Auth";

const Login = () => {
  const {login}:any=useContext(AuthContext)
  const values: object = {
    email: "",
    password: "",
  };
  const onSubmit = (values: object) => {
    const {...data}=values
    login(data)
  };
  return (
    <Formik
      initialValues={values}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
       {(formik)=>(
        <div className="flex bg-gray-200 flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <Link
          to="/"
          className="flex justify-center items-center mb-8 text-2xl font-semibold lg:mb-10"
        >
          <span className="self-center text-2xl font-bold whitespace-nowrap">
            Merkob.ma
          </span>
        </Link>
        {/* <!-- Card --> */}
        <div className="p-10 w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-300">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Sign in to platform
            </h2>
            <Form className="mt-8 space-y-6">
              <TextField name="email" type="text" label="Email" placeholder="name@gmail.com" />
              <TextField name="password" label="Password" type="text" placeholder="••••••••" />
              <button className="sm:inline-flex text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 shadow-md shadow-gray-300 bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-[1.02] transition-transform">
                Login to your account
              </button>
            </Form>
          </div>
        </div>
      </div>
       )}
    </Formik>
  );
};

export default Login;
