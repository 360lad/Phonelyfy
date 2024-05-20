import { WiLightning } from "react-icons/wi";

function Hero(){
    return(
        <div>      <div className="flex justify-evenly items-center text-[#4070F4] m-[3em] ">
            <div>
            <h1 className="text-bold text-[5rem] font-black">PHONELYFY</h1>
            <p className="text-[1em] w-[500px]">Give yourself the Convenience of a completely well arranged contacts of family and friends with ease.</p>
            <button className="block mx-auto bg-[#4070F4] text-white py-[1em] px-[2em] m-[1em] rounded  items-center justify-center">Get Started For Free</button>
            </div>

            <div className="rounded">
                <img className="w-[300px] h-[300px]  rounded"  src="src/assests/lady calling.jpeg" alt="a lady calling" />
            </div>
        </div>
        <div className="bg-[#F0F8FF] ">
            <div>
            <WiLightning size={80} className="text-[red]"/>

            </div>


        </div>
        </div>
  

    )
}
export default Hero