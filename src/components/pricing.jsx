function Pricing(){
    return(
    <div>
 <div className="bg-[#4070F4] ">
        <h2 className="text-white text-center font-extrabold text-[2em]">
          PRICING
        </h2>
        <div className="flex justify-evenly flex-wrap p-[2em]">
          <div className="border rounded fit text-white border-b-3  w-[250px] hover:shadow-[5px_5px_5px_rgb(255,255,255)]">
            <div className="border text-white border-b-3 p-[1em]">
              <h3 className="font-bold text-[1.5em]">Ksh.0</h3>
              <h3 className="font-bold text-[1.5em]">Free</h3>
            </div>
            <div className="p-[1em]">
              <p className="flex items-center p-[.5em]">
                <img src="src/assests/Check-box.svg" alt="" />
                Save your contacts
              </p>
              <p className="flex items-center p-[.5em]">
                <img src="src/assests/Check-box.svg" alt="" />
                Group your contacts upto 3 categories
              </p>
              <p className="flex items-center p-[.5em]">
                <img src="src/assests/Check-box.svg" alt="" />
                Add onehundred contacts
              </p>
              <button className="bg-[white] text-[#4070F4] rounded-full py-[.5em] px-[1em] block mx-auto">
                Get Started
              </button>
            </div>
          </div>

          <div className="border rounded fit text-white border-b-3  w-[250px] hover:shadow-[5px_5px_5px_rgb(255,255,255)]">
            <div className="border text-white border-b-3 p-[1em]">
              <h3 className="font-bold text-[1.5em]">Ksh.1000</h3>
              <h3 className="font-bold text-[1.5em]">Premium</h3>
            </div>
            <div className="p-[1em]">
              <p className="flex items-center p-[.5em]">
                <img src="src/assests/Check-box.svg" alt="" />
                Save your contacts
              </p>
              <p className="flex items-center p-[.5em]">
                <img src="src/assests/Check-box.svg" alt="" />
                Group your contacts upto unlimited categories
              </p>
              <p className="flex items-center p-[.5em]">
                <img src="src/assests/Check-box.svg" alt="" />
                Add unlimited contacts
              </p>
              <button className="bg-[white] text-[#4070F4] rounded-full py-[.5em] px-[1em] block mx-auto">
                Get Started
              </button>
            </div>
          </div>

          <div className="border rounded fit text-white border-b-3 w-[250px] hover:shadow-[5px_5px_5px_rgb(255,255,255)]">
            <div className="border text-white border-b-3 p-[1em]">
              <h3 className="font-bold text-[1.5em]">Ksh.10,000</h3>
              <h3 className="font-bold text-[1.5em]">Enterprise</h3>
            </div>
            <div className="p-[1em]">
              <p className="flex items-center p-[.5em]">
                <img src="src/assests/Check-box.svg" alt="" />
                Save your contacts
              </p>
              <p className="flex items-center p-[.5em]">
                <img src="src/assests/Check-box.svg" alt="" />
                Group your contacts upto 3 categories
              </p>
              <p className="flex items-center p-[.5em]">
                <img src="src/assests/Check-box.svg" alt="" />
                Add onehundred contacts
              </p>
              <button className="bg-[white] text-[#4070F4] rounded-full py-[.5em] px-[1em] block mx-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}
export default Pricing;