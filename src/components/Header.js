import React from "react";

const Header = () => {
  return (
    // <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
    <header className="absolute top-0 left-0 w-full px-24 py-4 z-20 flex items-center">
      <img
        className="w-44 md:w-48 ml-4 md:ml-8 -mt-2"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
    </header>
  );
};

export default Header;
