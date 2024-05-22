import { PiLineVerticalBold } from "react-icons/pi";

function Footer(){
    return(
        <div className="bg-[#4070F4]">
<img className="w-[150px] block mx-auto p-[2em]" src="src/assests/vintage phone.svg" alt="" />

<ul className="text-white flex justify-center gap-[1em] ">
    <li>Home</li>
    <li>Dashboard</li>
    <li>Pricing</li>
    <li>User Manual</li>
    <li>Sign Out</li>
</ul>
<img className="block mx-auto w-[250px] p-[2em]" src="src/assests/Social Icons.svg" alt="" />

        </div>
    )
}
export default Footer