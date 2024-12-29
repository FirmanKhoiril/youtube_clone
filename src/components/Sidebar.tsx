import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { GoHistory, GoClock } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-primary my-4 px-4 py-8 flex flex-col gap-4 rounded-r-xl drop-shadow-sm min-w-[270px] max-w-[270px] overflow-y-auto scrollbar-none max-h-[80%]">
      <div>
        <h1 className="text-2xl text-center text-blue-400 font-bold tracking-wide">IceTube</h1>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-row py-2.5 px-4 items-center gap-3 text-lg rounded-xl transition border-2 ${
              isActive ? "bg-body border-black" : "border-transparent hover:bg-body hover:border-black"
            }`
          }
        >
          <AiOutlineHome size={20} />
          <h2>Home</h2>
        </NavLink>
        <NavLink
          to="/subscription"
          className={({ isActive }) =>
            `flex flex-row py-2.5 px-4 items-center gap-3 text-lg rounded-xl transition border-2 ${
              isActive ? "bg-body border-black" : "border-transparent hover:bg-body hover:border-black"
            }`
          }
        >
          <MdOutlineSubscriptions size={20} />
          <h2>Subscription</h2>
        </NavLink>
        <NavLink
          to="/feed/history"
          className={({ isActive }) =>
            `flex flex-row py-2.5 px-4 items-center gap-3 text-lg rounded-xl transition border-2 ${
              isActive ? "bg-body border-black" : "border-transparent hover:bg-body hover:border-black"
            }`
          }
        >
          <GoHistory size={20} />
          <h2>History</h2>
        </NavLink>
        <NavLink
          to="/feed/watch-later"
          className={({ isActive }) =>
            `flex flex-row py-2.5 px-4 items-center gap-3 text-lg rounded-xl transition border-2 ${
              isActive ? "bg-body border-black" : "border-transparent hover:bg-body hover:border-black"
            }`
          }
        >
          <GoClock size={20} />
          <h2>Watch Later</h2>
        </NavLink>
        <NavLink
          to="/feed/liked-videos"
          className={({ isActive }) =>
            `flex flex-row py-2.5 px-4 items-center gap-3 text-lg rounded-xl transition border-2 ${
              isActive ? "bg-body border-black" : "border-transparent hover:bg-body hover:border-black"
            }`
          }
        >
          <FiThumbsUp size={20} />
          <h2>Liked Videos</h2>
        </NavLink>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl px-4 font-bold tracking-wide">Subscription</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row py-2.5 hover:bg-body cursor-pointer transition rounded-xl px-4 items-center gap-3 text-lg">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <h2>Channel 1</h2>
          </div>
          <div className="flex flex-row py-2.5 hover:bg-body cursor-pointer transition rounded-xl px-4 items-center gap-3 text-lg">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <h2>Channel 2</h2>
          </div>
          <div className="flex flex-row py-2.5 hover:bg-body cursor-pointer transition rounded-xl px-4 items-center gap-3 text-lg">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <h2>Channel 3</h2>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
