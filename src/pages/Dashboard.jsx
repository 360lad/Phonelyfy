function Dashboard() {
  return (
    <div>
      <div className="bg-[#F0F8FF] flex  rounded m-[1em]">
        <span className="border rounded-full p-[.5em]">AL</span>
        <div>
          <input className="p-[.8em] rounded " type="text" placeholder="Search for a contact" />
        </div>
        <button>+Create</button>
      </div>
    </div>
  );
}
export default Dashboard;
