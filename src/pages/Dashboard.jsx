import { useState } from "react";
import Managecategory from "../components/managecategory";
import Addcategory from "../components/addcategory";
function Dashboard() {
  const [showCategory, setShowCategory] = useState(false);
  const [showAddCategory, setShowAddCategory]= useState(false);

  function handleManageCategory() {
    setShowCategory(true);
  }
  function handleAddCategory(){
    setShowAddCategory(true);
  }

  return (
    <div className="">
      <div className="bg-[#F0F8FF] flex justify-evenly items-center rounded m-[2em] gap-[1em] p-[1em] sm: w-50 ">
        <span className="border rounded-full p-[.5em] bg-[#4070F4] text-white">
          AL
        </span>
        <div>
          <input
            className="p-[.5em] rounded outline-none "
            type="text"
            placeholder="Search for a contact"
          />
        </div>
        <button className="bg-[#4070F4] text-white rounded p-[.5em]">
          {" "}
          +Create
        </button>
        <button
          className="bg-[#4070F4] text-white rounded p-[.5em]"
          onClick={handleManageCategory}
        >
          {" "}
          Manage Category
        </button>

        {showCategory && (
          <Managecategory
            showCategory={showCategory}
            setShowCategory={setShowCategory}
          />
        )}
     
      </div>
      <div className="flex">
        <div className="hidden bg-[#4070F4] text-white rounded w-fit p-[2em] m-[2em] sm:block">
          <h2 className="font-bold text-[1em]">Filter by Category</h2>
          <ul>
            {}
            <li></li>
          </ul>
          <button
            className="bg-white text-[#4070F4] rounded p-[.3em] m-[1em]"
            onClick={handleAddCategory}
          >
            Add Category
          </button>
        </div>
        {showAddCategory && 
          <Addcategory
            showAddCategory={showAddCategory}
            setShowAddCategory={setShowAddCategory}
            categories={categories}
            setCategories={setCategories}
          />
        }
        <div className="bg-[#F0F8FF] p-[2em] sm: block mx-auto w-fit ">
          <div className="flex justify-evenly items-center gap-[4em] border-b-black">
            {" "}
            <label className="w-[30px] h-[30px] bg-[#fff] border rounded flex items-center p-[.5em]">
              <input
                className="outline-none border-none text-[1em] bg-[#4070F4] text-center"
                type="checkbox"
              />
            </label>
            <h2 className="font-bold text-[2em]"> All Contacts</h2>
          </div>
          <div className="flex gap-[2em] my-[1em]">
            <label className="w-[30px] h-[30px] bg-[#fff] border rounded flex items-center p-[.5em]">
              <input
                className="outline-none text-[1em] bg-[#4070F4] text-center"
                type="checkbox"
              />
            </label>
            <p className="rounded-full p-[.5em] bg-[#4070F4] text-white w-fit">
              AL
            </p>
            <div>
              <p>Abdul Latif</p>
              <p className="text-[gray]">latif@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
