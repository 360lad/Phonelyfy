import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PhonelifyContext } from "../context/state";
function Nav() {
  const {currentUser, setCurrentUser} = useContext(PhonelifyContext)
  const navigate=useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && setCurrentUser(user);
    console.log(currentUser);
  }, []);

  function handleLogOut(e){
    localStorage.removeItem("user");
    setCurrentUser(null)
    
    navigate("/")
    window.location.reload()

  }

  return (
    <div className="sticky flex justify-between items-center p-[2em] text-[#4070F4] bg-[#F0F8FF] ">
      <div className="w-[60px] h-[60px]">
        <img src="src/assests/telephone-logo-2.png" alt="" />
      </div>
      <div>
        <ul className="flex justify-between gap-[1em]">
          <Link to="/">
            <li>Home</li>
          </Link>
         
          
          {currentUser && currentUser ? (
            <div className="flex gap-4">
               <Link to="/dashboard">
            {" "}
            <li>Dashboard</li>
          </Link>         
            <Link to="/">
              {" "}
              <li onClick={(e)=>{handleLogOut(e)}}>Log Out</li>
            </Link>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/signup">
                <li>Sign up</li>
              </Link>
              <Link to="/signin">
                <li>Sign in</li>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Nav;
