import React, { useState } from "react";
import TextField from "../form-field/text-field.component";

const initialLoginData = {
  Email: "",
  Password: "",
};

const Login = ({ formState, onInputChange }) => {
  return (
    <div>
      <TextField
        type="email"
        label="Email"
        value={formState.Email}
        onChange={onInputChange}
        required={true}
      />
      <TextField
        type="password"
        label="Password"
        value={formState.Password}
        onChange={onInputChange}
        required={true}
      />
    </div>
  );
};

export default Login;
