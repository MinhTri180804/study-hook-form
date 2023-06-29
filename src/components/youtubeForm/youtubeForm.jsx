import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import classNames from "classnames";

YouTuBeForm.propTypes = {};

function YouTuBeForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    control,
    watch,
  } = useForm({
    defaultValues: {
      detailsUser: {
        username: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };


  const i = 2;

  return (
    <div className="container-form">
      <div className="form-content">
        <h4 className="title-form">REGISTER</h4>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            id="username"
            {...register("detailsUser.username", {
              required: {
                value: true,
                message: "Username cannot be empty",
              },
            })}
          />
          <p className="message-error">
            {errors.detailsUser?.username?.message}
          </p>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            id="email"
            {...register("detailsUser.email", {
              required: {
                value: true,
                message: "Email cannot be empty",
              },

              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Your email is not valid",
              },
            })}
          />
          <p className="message-error">{errors.detailsUser?.email?.message}</p>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            {...register("detailsUser.password", {
              required: {
                value: true,
                message: "Password cannot be empty",
              },
            })}
          />
          <p className="message-error">
            {errors.detailsUser?.password?.message}
          </p>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...register("detailsUser.confirmPassword", {
              required : {
                value : true,
                message : "Confirm Password cannot be empty"
              },
              validate : (value, formValues) => {
                return value === formValues.detailsUser.password ? true : "Confirm Password not match";
              }              
            })}
          />
          <p className="message-error">
            {errors.detailsUser?.confirmPassword?.message}
          </p>

          <button type="submit">submit</button>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
}

export default YouTuBeForm;
