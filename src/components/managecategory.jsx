import { FaUserEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

function Managecategory({showCategory,setShowCategory}) {
  function handleCancelCategory() {
    setShowCategory(false);
  }
   

  return (
    <div className="absolute flex flex-col justify-center text-[white] border-[red] border-roundedfull bg-[#4070F4] p-[2em] gap-[2em]">
      <div className="flex  gap-[2em]">
        <h1>Manage Category </h1>
        <button><TiDelete
          className="absolute top-[0%] right-[-1%]  text-[2em]"
          onClick={handleCancelCategory}
        /></button>
        
      </div>

      <button className="bg-[#fff] text-[#4070F4] rounded p-[.5em]">
        Add Category
      </button>
      <div className="flex  gap-[2em]">
        <p>
          Family {" "}
        </p>
        <FaUserEdit className="text-[1em]" />
        <TiDelete className="text-[1em]" />
      </div>
      <div className="flex  gap-[2em]">
        <p>
          Friends{" "}
        </p>
        <FaUserEdit className="text-[1em]" />
        <TiDelete className="text-[1em]" />
      </div>
    </div>
  );
}
export default Managecategory;
