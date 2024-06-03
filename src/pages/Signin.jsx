import { useState } from "react"
function Signin(){
    const [formdata,setFormData]=useState({})
    const [error,setError]=useState(null)
    function handleChange(e){
setFormData({...formdata,[e.target.name]:e.target.value})
    }

    function handleSignin(e){
        const errors={};
        console.log(errors)
    }
    
    return(
        <div className="flex items-center justify-center m-[3em]">
        <div className=" border rounded flex flex-col justify-evenly items-center w-[350px] p-[1em] bg-white">
            <h1 className="font-extrabold text-[2em] text-center">Sign in</h1>
            <div className="flex flex-col w-[300px] gap-[1em]">
                <p className="text-red-500 font-bold text-center">{error && error.email && error.email}</p>
                <input className="border rounded fill-gray p-[1em]" type="text" name="email" placeholder="Enter Email" onChange={(e) => handleChange(e)}/>
                <p className="text-red-500 font-bold text-center">{error && error.password && error.password}</p>

                <input className="border rounded fill-gray p-[1em]" type="password" name="password" placeholder="Enter password" onChange={(e) => handleChange(e)} />
                <p className="text-[#4070F4] block mx-auto">Forgot your password ?</p>
                <button className="bg-[#4070F4] rounded p-[1em] text-white" onClick={(e)=>handleSignin(e)}>Sign in</button>
                <p className="block mx-auto">Dont have an account <span className="text-[#4070F4]">Sign up</span></p>
            </div>
    

        </div>
        </div>
    )
}
export default Signin