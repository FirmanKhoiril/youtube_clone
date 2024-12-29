import { MdOutlineSubscriptions } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { GoHistory, GoClock  } from "react-icons/go";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="bg-primary my-4 px-4 py-8 flex flex-col gap-4 rounded-r-xl drop-shadow-sm min-w-[270px] max-w-[270px] overflow-y-auto scrollbar-none max-h-[80%]">
      <div className="">
        <h1 className="text-2xl text-center text-blue-400 font-bold tracking-wide">IceTube</h1>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <div
          className={`flex flex-row ${
            pathname === "/" ? "  bg-body border-black" : "border-transparent"
          } py-2.5 hover:border-black hover:bg-body cursor-pointer transition rounded-xl border-2 px-4  items-center gap-3 text-lg`}
        >
          <AiOutlineHome size={20} />
          <h2>Home</h2>
        </div>
        <div
          className={`flex flex-row ${
            pathname === "/subscription"
              ? "  bg-body border-black"
              : "hover:border-black hover:bg-body"
          } py-2.5 border-transparent cursor-pointer transition rounded-xl border-2 px-4  items-center gap-3 text-lg`}
        >
          <MdOutlineSubscriptions size={20} />
          <h2>Subscription</h2>
        </div>
        <div
          className={`flex flex-row ${
            pathname === "/feed/history"
              ? "  bg-body border-black"
              : "hover:border-black hover:bg-body"
          } py-2.5 border-transparent cursor-pointer transition rounded-xl border-2 px-4  items-center gap-3 text-lg`}
        >
          <GoHistory size={20} />
          <h2>History</h2>
        </div>
        <div
          className={`flex flex-row ${
            pathname === "/feed/watch-later"
              ? "  bg-body border-black"
              : "hover:border-black hover:bg-body"
          } py-2.5 border-transparent cursor-pointer transition rounded-xl border-2 px-4  items-center gap-3 text-lg`}
        >
          <GoClock  size={20} />
          <h2>Watch Later</h2>
        </div>
        <div
          className={`flex flex-row ${
            pathname === "/feed/liked-videos"
              ? "  bg-body border-black"
              : "hover:border-black hover:bg-body"
          } py-2.5 border-transparent cursor-pointer transition rounded-xl border-2 px-4  items-center gap-3 text-lg`}
        >
          <FiThumbsUp size={20} />
          <h2>Liked Videos</h2>
        </div>
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
