import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Homepage from "../pages/homepage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
function Router() {
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
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
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
