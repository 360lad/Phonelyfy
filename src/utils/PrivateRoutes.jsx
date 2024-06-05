import { useContext, useEffect } from "react";
import { PhonelifyContext } from "../context/state";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({ Component }) {
  const { currentUser, setCurrentUser } = useContext(PhonelifyContext);

  console.log(currentUser)

  const user = JSON.parse(localStorage.getItem("user"))

  return  user ? Component : <Navigate to="/signin" replace/>

}
export default PrivateRoutes;
