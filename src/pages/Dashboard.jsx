function Dashboard() {
  return (
    <div>
      <div className="bg-[#F0F8FF] flex justify-evenly items-center rounded m-[2em] gap-[1em] p-[1em] ">
        <span className="border rounded-full p-[.5em] bg-[#4070F4] text-white">AL</span>
        <div>
          <input className="p-[.5em] rounded outline-none " type="text" placeholder="Search for a contact" />
        </div>
        <button className="bg-[#4070F4] text-white rounded p-[.5em]"> +Create</button>
      </div>
      <div className="bg-[#4070F4] text-white rounded w-fit p-[2em] m-[2em]">
        <h2 className="font-bold text-[1em]">Filter by Category</h2>
        <p>Family</p>
        <p>Friends</p>
        <p>Work Mates</p>
        <button className="bg-white text-[#4070F4] rounded p-[.3em] m-[1em]">Add Category</button>
      </div>
      <div>
        
      </div>
    </div>
  );
}
export default Dashboard;
