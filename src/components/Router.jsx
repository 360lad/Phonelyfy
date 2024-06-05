import { useEffect } from "react";
import { createContext, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Homepage from "../pages/homepage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import { Link } from "react-router-dom";
import { PhonelifyContext } from "../context/state";
import PrivateRoutes from "../utils/PrivateRoutes";
function Router() {
  const { currentUser, setCurrentUser } = useContext(PhonelifyContext);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && setCurrentUser(user);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {    console.log(currentUser)}
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />

        <Route
          path={"/dashboard"}
          element={
            <Layout>
                <PrivateRoutes Component={<Dashboard/>} />
              
            </Layout>
          }
        />

        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout className="bg-[red]">
              <Signin />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
