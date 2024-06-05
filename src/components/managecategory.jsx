import { FaUserEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";



function Managecategory(){
    ruturn(
        <div className="mx-auto rounded ">
            <h1>Manage Category</h1>
            <button className="bg-[#4070F4] text-white rounded p-[.5em]">Add Category</button>
            <p>Family <FaUserEdit /> <TiDelete />

 </p>
            <p>Friends</p>
        </div>
    )
}