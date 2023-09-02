import React, { useState } from "react";
import { signUpUsingEmailAndPassword } from "../../utils/firebase.util";
import TextField from "../form-field/text-field.component";
import Notiflix from "notiflix";

const initialState = {
  Email: "",
  DisplayName: "",
  Password: "",
  ConfirmPassword: "",
};

const SignUp = ({ formState, onInputChange }) => {
  const { Email, Password } = formState;

  const confirmPassword = formState["Confirm Password"];
  const displayName = formState["Display Name"];

  const onSignUpSubmit = async (event) => {
    event.preventDefault();
    if (Password == confirmPassword) {
      const authResult = await signUpUsingEmailAndPassword({ Email, Password });
    } else {
      Notiflix.Notify.failure("Password does not Match");
    }
  };

  return (
    <form onSubmit={onSignUpSubmit}>
      <TextField
        onChange={onInputChange}
        type="text"
        label="Display Name"
        value={displayName}
      />
      <TextField
        onChange={onInputChange}
        type="email"
        label="Email"
        value={Email}
      />
      <TextField
        onChange={onInputChange}
        type="password"
        label="Password"
        value={Password}
      />
      <TextField
        onChange={onInputChange}
        type="password"
        label="Confirm Password"
        value={confirmPassword}
      />
    </form>
  );
};

export default SignUp;
