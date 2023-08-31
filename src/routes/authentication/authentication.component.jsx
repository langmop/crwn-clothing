import React, { useState } from "react";
import {
  signInWithGooglePopup,
  signInWithTwitterPopup,
  createUserDocumentFromAuth,
  signInWithAddedEmailAndPassword,
} from "../../utils/firebase.util";
import classNames from "classnames";
import Login from "../../components/login-form/login-form.component";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import { signUpUsingEmailAndPassword } from "../../utils/firebase.util";
import Notiflix from "notiflix";

const Authentication = () => {
  const [authMode, setAuthMode] = useState("Login");
  const [formState, setFormState] = useState({});

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      const { user } = response;
      const userRef = await createUserDocumentFromAuth(user);
      Notiflix.Notify.success("Successfully Signin by Google");
    } catch (err) {
      Notiflix.Notify.failure("Failed SignIn Using Google");
    }
  };

  const logTwitterUser = async () => {
    const response = await signInWithTwitterPopup();
    console.log(response);
  };

  const loginButton = classNames(
    "w-[200px] text-[#029664] h-[48px] border-2 border-solid border-[#029664] font-semibold rounded-[8px] mr-[24px]",
    {
      "bg-[#029664] text-white": authMode == "Login",
    }
  );
  const signUpButton = classNames(
    "w-[200px] text-[#029664] h-[48px] border-2 border-solid border-[#029664] font-semibold rounded-[8px]",
    {
      "bg-[#029664] text-white": authMode == "SignUp",
    }
  );

  const CurrentAuthComponents = authMode == "Login" ? Login : SignUp;

  const onSubmitButtonClick = async (event) => {
    const { name } = event.target;

    if (name == authMode) {
      switch (authMode) {
        case "Login": {
          const { Email, Password } = formState;
          const signInResult = await signInWithAddedEmailAndPassword({
            email: Email,
            password: Password,
          });

          if (!signInResult.error) {
            Notiflix.Notify.success("Signed Up successfully");
            console.log(signInResult);
          } else {
            Notiflix.Notify.failure(signInResult.errorMessage);
          }
          break;
        }

        case "SignUp": {
          const displayName = formState["Display Name"];
          const email = formState["Email"];
          const password = formState["Password"];
          const confirmPassword = formState["Confirm Password"];

          if (confirmPassword == password) {
            const result = await signUpUsingEmailAndPassword({
              email,
              password,
            });

            if (!result.error) {
              const { user } = result;
              const savedDocument = createUserDocumentFromAuth(user);
              Notiflix.Notify.success("Signed Up successfully");
            } else {
              Notiflix.Notify.failure(result.errorMessage);
            }
          }

          break;
        }
      }
    } else {
      if (authMode == "Login") {
        setAuthMode("SignUp");
      } else {
        setAuthMode("Login");
      }
    }
  };

  return (
    <div className="flex w-[100%] flex-1">
      <div className="w-[60%] flex m-auto h-[700px] rounded-xl shadow-xl p-4">
        <div className="w-[50%] h-[100%] pl-[24px] pt-4 flex flex-col">
          <div>
            <div>
              <img
                className="w-[200px]"
                src="https://i.ibb.co/kXm4bp5/Frame-13.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="mt-4 text-[#2F6FED] text-[24px] font-semibold">
              Elevate Your Style, Embrace the Traveller in You: Discover Fashion
              with Travalizer!
            </div>
            <div className="mt-[24px] text-[#58745E] text-[20px] font-semibold">
              Welcome Back, Please login to your account
            </div>
            <div className="mt-4">
              <CurrentAuthComponents
                formState={formState}
                onInputChange={onInputChange}
              />
            </div>
          </div>
          <div className="w-[100%] mt-[32px]">
            <div className="flex">
              <button
                name="Login"
                onClick={onSubmitButtonClick}
                className={loginButton}
              >
                Login
              </button>
              <button
                name="SignUp"
                onClick={onSubmitButtonClick}
                className={signUpButton}
              >
                Sign Up
              </button>
            </div>

            <div className="mt-[24px] !text-[#58745E]">
              Or, Login With &nbsp; &nbsp;&nbsp;{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={logGoogleUser}
              >
                Google
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex h-[650px] relative bottom-0">
          <img
            src="https://i.ibb.co/7STWytL/Man2.jpg"
            alt=""
            className="h-[100%]"
          />
          <img
            src="https://i.ibb.co/5LBK3JG/Woman2-1.png"
            alt=""
            className="h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
