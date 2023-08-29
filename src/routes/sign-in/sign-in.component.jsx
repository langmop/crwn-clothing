import React from "react";
import {
  signInWithGooglePopup,
  signInWithTwitterPopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    const userRef = await createUserDocumentFromAuth(user);
    console.log(userRef);
  };

  const logTwitterUser = async () => {
    const response = await signInWithTwitterPopup();
    console.log(response);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <br />
    </div>
  );
};

export default SignIn;
