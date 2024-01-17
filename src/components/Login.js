import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/checkValidData';

const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonCLick = () => {
    // vallidate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message);
    console.log(email);
    console.log(password);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSigninForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSigninForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-800 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-sm"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonCLick}
        >
          {isSigninForm ? 'Sign in' : 'Sign Up'}
        </button>
        <p className="py-4">
          {isSigninForm ? (
            <>
              <span className="text-gray-custom">New to Netflix?</span>
              <span className="cursor-pointer" onClick={toggleSignInForm}>
                {' '}
                Sign up Now
              </span>
            </>
          ) : (
            <>
              <span className="text-gray-custom">Already registered?</span>
              <span className="cursor-pointer" onClick={toggleSignInForm}>
                Sign in now
              </span>
            </>
          )}
          <span className="text-gray-custom">.</span>
        </p>
        <p className="text-13">
          <span className="text-gray-custom">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
