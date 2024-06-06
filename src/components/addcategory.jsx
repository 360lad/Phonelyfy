import { useState } from "react";
import { MdCancel } from "react-icons/md";

function Addcategory({ showAddCategory, setShowAddCategory }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  function handleCancelCategory() {
    setShowAddCategory(false);
  }
  function handleCategory(e) {
    setFormData({...formData,[e.target.name]: e.target.value });
  }

  async function handleCategoryValidation() {
    const errors = {};
    if (!formData.category || formData.category === "") {
      errors.category = "Enter Category Name";
    }
    if (!formData.description ||formData.description === "") {
      errors.description = "Enter Category Description";
    }
    setError(errors);
    // console.log(formData)
if(!error === false){
 const url="http://localhost:3000/api/category/new";
 const options={
    method:"POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(formData),
 }
 const response=await fetch (url,options) ;
 const data=await response.json()
 console.log(data)
}

  }

  return (
    <div className="absolute  mx-auto bg-[#4070F4] flex flex-col text-white gap-[.5em] p-[2em]">
         <p className="text-red-500 font-bold text-center">
          {error && error.category}
        </p>
      <div className=" flex justify-center">
       
        <input
          className="p-[.5em] rounded outline-none border-[#4070F4] text-[#000] "
          type="text"
          name="category"
          id=""
          placeholder="Category Name"
          onChange={(e) => handleCategory(e)}
        />
        <MdCancel
          className="absolute top-[0%] right-[1%] text-[1.5em] "
          onClick={handleCancelCategory}
        />
      </div>
      <p className="text-red-500 font-bold text-center">
        {error && error.description}
      </p>
      <input
        className="p-[.5em] rounded outline-none border-[#4070F4] text-[#000] "
        type="text"
        name="description"
        id=""
        placeholder="Category Description"
        onChange={(e) => handleCategory(e)}
      />
      <button
        className="bg-[#fff] text-[#4070F4] rounded p-[.5em]"
        onClick={handleCategoryValidation}
      >
        Add Category
      </button>
    </div>
  );
}
export default Addcategory;
