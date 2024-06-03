import { Link } from "react-router-dom"
function Nav(){
    return(
 <div className="sticky flex justify-between items-center p-[2em] text-[#4070F4] bg-[#F0F8FF] ">
<div className="w-[60px] h-[60px]">
<img src="src/assests/telephone-logo-2.png" alt="" /></div>
<div>
    <ul className="flex justify-between gap-[1em]">

       <Link to="/"><li>Home</li></Link> 
       <Link to="/dashboard"> <li>Pricing</li></Link>
      <Link to="/signin">  <li>Sign in</li></Link>
        <Link to="/signup"><li>Sign up</li></Link>
    </ul>
</div>
 </div>
 )
}
export default Nav