function Signup(){
    return(
        <div className=" mx-auto border rounded flex flex-col justify-evenly items-center w-[350px] p-[1em] bg-white m-[2em]">
        <h1 className="font-extrabold text-[2em] text-center">Sign up</h1>
        <div className="flex flex-col w-[300px] gap-[1em]">
            <input className="border rounded fill-gray p-[1em]" type="text" name="" id="" placeholder="Enter Email" />
            <input className="border rounded fill-gray p-[1em]" type="password" name="" id="" placeholder="Enter password" />
            <input className="border rounded fill-gray p-[1em]" type="password" name="" id="" placeholder="Confirm Password" />
            <button className="bg-[#4070F4] rounded p-[1em] text-white">Sign in</button>
            <p className="block mx-auto">Already have an account ? <span className="text-[#4070F4]">Sign in</span></p>
        </div>


    </div>
    )
}
export default Signup