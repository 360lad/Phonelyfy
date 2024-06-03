import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signin from "./Signin";
function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState();
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSignup() {
    const errors = {};
    if (!formData.email || formData.email === "") {
      errors.email = "Please enter your email";
    }
    if (!formData.password || formData.password === "") {
      errors.password = "Please Enter the Correct Password";
    }
    if (!formData.confirmPassword || formData.confirmPassword === "") {
      errors.confirmPassword = "Please Enter the Correct Password";
    }
    if (formData.password != formData.confirmPassword) {
      errors.confirmPassword = "Fill in the correct password";
    }

    setError(errors);

    if (!{} === false) {
      const url = "http://localhost:3000/api/auth/signup";
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      };

      const response = await fetch(url, options);
      const data = await response.json().catch(error);
      console.log(data);
      console.log(error);
      if (!data.ok) {
        console.log(data);
        setErrorMessage(data.message);
      }
      else{
    const navigate= useNavigate()
    navigate("/signin")
      }
    }
  }

  return (
    <div className=" mx-auto border rounded flex flex-col justify-evenly items-center w-[350px] p-[1em] bg-white m-[2em]">
      <h1 className="font-extrabold text-[2em] text-center">Sign up</h1>
      <div className="flex flex-col w-[300px] gap-[1em]">
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <p className="text-red-500 font-bold">
          {error && error.email && error.email}
        </p>
        <input
          className="border rounded fill-gray p-[1em]"
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={(e) => handleChange(e)}
        />
        <p className="text-red-500 font-bold">
          {error && error.password && error.password}
        </p>

        <input
          className="border rounded fill-gray p-[1em]"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => handleChange(e)}
        />
        <p className="text-red-500 font-bold">
          {error && error.confirmPassword && error.confirmPassword}
        </p>

        <input
          className="border rounded fill-gray p-[1em]"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="bg-[#4070F4] rounded p-[1em] text-white"
          onClick={(e) => handleSignup(e)}
        >
          Sign up
        </button>
        <p className="block mx-auto">
          Already have an account ?{" "}
          <span className="text-[#4070F4]">Sign in</span>
        </p>
      </div>
    </div>
  );
}
export default Signup;
