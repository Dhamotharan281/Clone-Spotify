import { assets } from "../assets/assets"

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex">

      {/* TOP SECTION */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>

      </div>

      {/* LIBRARY SECTION */}
      <div className="bg-[#121212] h-[85%] rounded">

        <div className="p-4 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
            <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
<img className="w-5" src={assets.plus_icon} alt="" />    
      </div>
          </div>

        </div>
<div className="bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-2 p-5  ">
<h2>Create Your First PlayList..🎤🎶</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, neque accusantium?</p>
<button className="bg-white text-black rounded-full mt-3  px-4 py-1.6 text-[16px] text-center">Create PlayList</button>
</div>
      </div>

    </div>
  )
}

export default Sidebar
