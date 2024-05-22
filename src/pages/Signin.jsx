function Signin(){
    return(
        <div className=" border rounded flex flex-col justify-evenly items-center w-[350px] p-[1em] bg-white">
            <h1 className="font-extrabold text-[2em] text-center">Sign in</h1>
            <div className="flex flex-col w-[300px] gap-[1em]">
                <input className="border rounded fill-gray p-[1em]" type="text" name="" id="" placeholder="Enter Email" />
                <input className="border rounded fill-gray p-[1em]" type="password" name="" id="" placeholder="Enter password" />
                <p className="text-[#4070F4] block mx-auto">Forgot your password ?</p>
                <button className="bg-[#4070F4] rounded p-[1em] text-white">Sign in</button>
                <p className="block mx-auto">Dont have an account <span className="text-[#4070F4]">Sign up</span></p>
            </div>
    

        </div>
    )
}
export default Signin