import { SiYoutubeshorts } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='w-full px-4 py-3 rounded-xl flex items-center justify-between bg-primary'>
      <div className="gap-4 flex items-center">
        <NavLink
          to="/shorts"
          className={({ isActive }) =>
            `p-3 rounded-xl transition ${
              isActive ? "bg-blue-400/20" : "bg-blue-400/10"
            }`
          }
        >
          <SiYoutubeshorts size={20} color="#3b82f6" />
        </NavLink>
        <NavLink
          to="/feed/trending"
          className={({ isActive }) =>
            `p-3 text-gray-400 hover:text-gray-300 rounded-xl transition ${
              isActive ? "bg-secondaryHover" : "bg-secondary"
            }`
          }
        >
          <FaFire size={20} />
        </NavLink>
      </div>
      <SearchBar />
      <div className="flex items-center gap-4">
        <button type="button" className="p-3 text-gray-400 hover:text-gray-300 rounded-xl bg-secondary hover:bg-secondaryHover transition">
          <RiVideoAddFill size={20}  />
        </button>
        <button type="button" className="p-3 text-gray-400 hover:text-gray-300 rounded-xl bg-secondary hover:bg-secondaryHover transition">
          <SiYoutubeshorts size={20}  />
        </button>
       <div className="bg-secondary hover:bg-secondaryHover transition rounded-xl flex items-center px-2 py-1.5 gap-2">
        <img width={33} height={33} className="rounded-xl" src="https://lh3.googleusercontent.com/a/ACg8ocKkaqJE6dW79KMxmlmwuTs-7XSKb3T-anBS8FL31yAnT5t_cg=s288-c-no" alt="Firman Khoiril" />
        <button>
          <MdKeyboardArrowDown size={25} />
        </button>
       </div>
      </div>
    </nav>
  )
}

export default Navbar