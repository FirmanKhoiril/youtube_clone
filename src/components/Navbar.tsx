import { SiYoutubeshorts } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className='w-full px-4 py-3 rounded-xl flex items-center justify-between bg-primary'>
      <div className="gap-4 flex items-center">
        <button type="button" className="p-3 rounded-xl bg-blue-400/10 blue-500 transition hover:bg-blue-400/20">
          <SiYoutubeshorts size={20} color="#3b82f6" />
        </button>
        <button type="button" className="p-3 text-gray-400 hover:text-gray-300 rounded-xl bg-secondary hover:bg-secondaryHover transition">
          <FaFire size={20}  />
        </button>
      </div>
      <SearchBar />
      <div className="flex items-center gap-4">
        <button type="button" className="p-3 text-gray-400 hover:text-gray-300 rounded-xl bg-secondary hover:bg-secondaryHover transition">
          <RiVideoAddFill size={20}  />
        </button>
        <button type="button" className="p-3 text-gray-400 hover:text-gray-300 rounded-xl bg-secondary hover:bg-secondaryHover transition">
          <SiYoutubeshorts size={20}  />
        </button>
       profile
      </div>
    </nav>
  )
}

export default Navbar