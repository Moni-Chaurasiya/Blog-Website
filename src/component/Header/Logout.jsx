//import React from "react";

import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function Logout() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-block w-auto px-3  justify-items-center  ps-6 py-2 duration-200 hover:bg-blue-500 rounded text-2xl text-yellow-400"
    >
      Logout
    </button>
  );
}

export default Logout;
