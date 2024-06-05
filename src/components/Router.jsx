import { createContext, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Homepage from "../pages/homepage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import { Link } from "react-router-dom";
import { PhonelifyContext } from "../context/state";
function Router() {
  const { currentUser, setCurrentUser } = useContext(PhonelifyContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        {}

        {currentUser ? (
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
        ) : (
          <Route
            path="/signin"
            element={
              <Layout className="bg-[red]">
                <Signin />
              </Layout>
            }
          />
        )}

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
