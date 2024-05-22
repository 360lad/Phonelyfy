import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";

function Hero() {
  return (
    <div>
      {" "}
      <div className="flex justify-evenly items-center text-[#4070F4] m-[3em] ">
        <div className="block  sm:mx-auto">
          <h1 className="text-bold text-[5rem] font-black">PHONELYFY</h1>
          <p className="text-[1em] w-[500px]">
            Give yourself the Convenience of a completely well arranged contacts
            of family and friends with ease.
          </p>
          <button className="block mx-auto bg-[#4070F4] text-white py-[1em] px-[2em] m-[1em] rounded  items-center justify-center">
            Get Started For Free
          </button>
        </div>

        <div className="rounded sm:hidden">
          <img
            className="w-[300px] h-[300px]  rounded"
            src="src/assests/lady calling.jpeg"
            alt="a lady calling"
          />
        </div>
      </div>
      <div className="bg-[#F0F8FF] flex justify-evenly flex-wrap ">
        <div className="w-[300px] p-[2em]">
          <img src="src/assests/feather.svg" alt="" />
          <h2 className="text-[#4070F4] font-bold text-[1.5em]">50% Lighter</h2>
          <p>
            For lighter and convenient contact app that is much lighter and
            stores a large number of contacts in different categories on how you
            need it with little work
          </p>
        </div>
        <div className="w-[300px]  p-[2em]">
          <img src="src/assests/Lightning.svg" alt="lightening" />
          <h2 className="text-[#4070F4] font-bold text-[1.5em]">Faster</h2>
          <p>
            Due to the apps lightness it is faster and enables users to access
            there contact and edit them into different categiries with ease.
          </p>
        </div>
        <div className="w-[300px]  p-[2em]">
          <img src="src/assests/Dollar-sign.svg" alt="sign" />
          <h2 className="text-[#4070F4] font-bold text-[1.5em]">
            Favorable prices
          </h2>
          <p>For prices that feet your pocket and wants.</p>
        </div>
      </div>
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
      <div>
        <h2 className="text-[#4070F4] font-bold text-[2em] text-center">
          Testimonials
        </h2>
        <div className="flex justify-center flex-wrap gap-[4em] m-[2em]">
          <div className="bg-[#F0F8FF] rounded p-[2em] w-[250px] ">
            <img
              className="w-[60px] mt-[-60px] block mx-auto"
              src="src/assests/male-profile.png"
              alt=""
            />

            <p className="text-[#4070F4]">
              <BiSolidQuoteLeft size={20} className="text-[#4070F4]" />
              Phonelyfy has really helped me in arrange my contacts with alot of
              ease I my phone book is well arranged.
              <BiSolidQuoteRight size={20} className="text-[#4070F4]" />
            </p>
          </div>
          <div className="bg-[#F0F8FF] rounded p-[2em] w-[250px]">
            <img
              className="w-[60px] mt-[-60px] block mx-auto"
              src="src/assests/female-profile.png"
              alt=""
            />

            <p className="text-[#4070F4]">
              <BiSolidQuoteLeft size={20} className="text-[#4070F4]" />
              Accessing my family and friends has become easier I get i touch
              with them with a lot of ease
              <BiSolidQuoteRight size={20} className="text-[#4070F4]" />
            </p>
          </div>
          <div className="bg-[#F0F8FF] rounded p-[2em] w-[250px]">
            <img
              className="w-[60px] mt-[-60px] block mx-auto"
              src="src/assests/male-profile.png"
              alt=""
            />

            <p className="text-[#4070F4]">
              <BiSolidQuoteLeft size={20} className="text-[#4070F4]" />
              I can now get into contact easily to my workmates and communicate on
              relevant issues to our workplace with a lot of ease{" "}
              <BiSolidQuoteRight size={20} className="text-[#4070F4]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
