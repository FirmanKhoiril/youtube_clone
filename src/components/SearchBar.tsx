import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("")

  const navigate = useNavigate()
  const handleSearching = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/search/${searchInput}`)
  }

  const handleClearInput = () => {
    setSearchInput("")
  }

  return (
    <form onSubmit={handleSearching} className="relative max-w-[50%] w-full">
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="bg-body rounded-xl border-transparent outline-none focus-within:border-black border-2 pl-4 pr-[50px] w-full py-2.5" placeholder="search"/>
      <button type="submit" className="p-3.5 absolute  right-0 rounded-xl bg-black">
        <FiSearch size={20} />
      </button>
      {searchInput.length > 0 && (
        <button onClick={handleClearInput} className="absolute top-3 right-14 text-white rounded-xl">
          <IoClose size={24} />
        </button>
      )}
    </form>
  )
}

export default SearchBar