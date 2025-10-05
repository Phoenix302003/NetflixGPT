import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-full bg-black text-white">
      <div className="absolute inset-0">
        <img
          // src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_small.jpg"
          alt="bg-url"
          className="w-full h-full object-cover opacity-60"
        ></img>
      </div>
      <div className="absolute inset-0 bg-opacity-50"></div>
      <Header />
      <form className="absolute top-1/2 left-1/2 w-11/12 max-w-md -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 p-10 rounded-lg shadow-lg">
        <h1 className="font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 bg-[#333] text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-3 mb-4 bg-[#333] text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-[#333] text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
        ></input>
        <button className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center opacity-80 mt-3 mb-3">OR</p>
        <button className="w-full bg-white bg-opacity-20 py-3 rounded font-semibold hover:bg-opacity-15 transition">
          Use a sign-in-code
        </button>
        {isSignInForm && (
          <div className="text-center mt-3">
            <p className="underline">Forgot password?</p>
          </div>
        )}
        <div className="mt-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="appearance-none w-5 h-5 border border-white border-opacity-30 rounded bg-transparent checked:bg-white checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgNEw0LjUgNy41TDExIDEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] checked:bg-center checked:bg-no-repeat hover:border-opacity-100 transition-all cursor-pointer"
            />
            <span>Remember me</span>
          </label>
        </div>
        <p className="mt-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              <span className="text-white text-opacity-50">
                New to Netflix?
              </span>
              <span className="text-white font-semibold">Sign up now.</span>
            </>
          ) : (
            <>
              <span className="text-white text-opacity-50">
                Already registered?
              </span>
              <span className="text-white font-semibold">Sign in now.</span>
            </>
          )}
        </p>
        <p className="mt-4 opacity-50 text-xs">
          This page is protected by Google reCAPTCHA to ensure <br />
          you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
