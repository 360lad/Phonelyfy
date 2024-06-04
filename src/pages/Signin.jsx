import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Signin() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [errorMessage,setErrorMessage]=useState()
  const navigate = useNavigate();
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSignin() {
    const errors = {};
    // console.log(formdata);

    if (!formData.email || formData.email === "") {
      errors.email = "Please enter your email";
    }
    if (!formData.password || formData.password === "") {
      errors.password = "Please Enter the Correct Password";
    }
    setError(errors);

    if (!error === false) {
      const url = "http://localhost:3000/api/auth/signin";
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      };
      const response = await fetch(url, options);
      const data = await response.json();

        console.log(data.message);

        if(response.ok){

          localStorage.setItem("user", JSON.stringify(data));
          navigate("/dashboard");

        }
         else {
            setErrorMessage(data.message)
        }
      

      }
    
  }

  return (
    <div className="flex items-center justify-center m-[3em]">
      <div className=" border rounded flex flex-col justify-evenly items-center w-[350px] p-[1em] bg-white">
        <h1 className="font-extrabold text-[2em] text-center">Sign in</h1>
        <p className="text-red-500 font-bold text-center">{errorMessage && errorMessage}</p>
        <div className="flex flex-col w-[300px] gap-[1em]">
          <p className="text-red-500 font-bold text-center">
            {error && error.email && error.email}
          </p>
          <input
            className="border rounded fill-gray p-[1em]"
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => handleChange(e)}
          />
          <p className="text-red-500 font-bold text-center">
            {error && error.password && error.password}
          </p>

          <input
            className="border rounded fill-gray p-[1em]"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) => handleChange(e)}
          />
          <p className="text-[#4070F4] block mx-auto">Forgot your password ?</p>
          <button
            className="bg-[#4070F4] rounded p-[1em] text-white"
            onClick={handleSignin}
          >
            Sign in
          </button>
          <p className="block mx-auto">
            Dont have an account <span className="text-[#4070F4]">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signin;
