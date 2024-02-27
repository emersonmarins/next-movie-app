import {FaSearch} from "react-icons/fa"
import {BiSearch} from "react-icons/bi"


export default function FieldSearch() {
  return (
    <div className="flex items-center rounded-2xl max-w-60 py-2 px-4 bg-[var(--container-color)]">
      <input type="search" id="search-input" placeholder="buscar filme" 
        className="bg-[var(--container-color)] border-none outline-none text-zinc-300 w-full placeholder:font-light"
      />
        <BiSearch className="h-auto w-6 text-zinc-100"/>
    </div>
  )
}