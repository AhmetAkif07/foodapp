import React from "react";
import Input from "../../components/form/Input";
import Title from "../../components/ui/Title";
import { useFormik } from "formik";
import { resolve } from "styled-jsx/css";
import { loginScheme } from "../../components/schema/login";
import { AiFillGithub } from "react-icons/ai";

const login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginScheme,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Name",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20 w-1/2 mx-auto">
        <Title classAdd="text-[40px] mb-6">login</Title>
        <div className="flex flex-col gap-y-2 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-5">
          <button className="btn-primary my-2">Login</button>
          <button className="btn-primary !bg-secondary flex text-center justify-center">
            <AiFillGithub className="text-xl mr-2" />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
