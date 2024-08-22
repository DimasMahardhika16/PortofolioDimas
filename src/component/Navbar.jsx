import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">
            Explore Premium
          </button>
          <button className="bg-black py-1 px-3 rounded-2xl text-[15px]">
            Install App
          </button>
          <button className="bg-blue-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            D
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <button className="bg-white text-black px-4 py-1 rounded-2xl">
          All
        </button>
        <button className="bg-black px-4 py-1 rounded-2xl">Music</button>
        <button className="bg-black px-4 py-1 rounded-2xl">Podcasts</button>
      </div>
    </>
  );
};

export default Navbar;
