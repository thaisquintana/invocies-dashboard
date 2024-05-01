import { SearchIcon } from "lucide-react";

export const Search: React.FC = () => {
    const handleSearch = () => {
       console.log('enter')
    }
    return (
        <div className="flex items-center relative w-1/4 max-w-screen-xl">
        <input
          type="text"
          placeholder="Buscar..."
          className="rounded-lg w-full p-3 border border-weldon-blue bg-transparent text-deep-space-sparkle placeholder-text-deep-space-sparkle focus:border-pink-500 focus:bg-white focus-visible:outline-none relative left-2 focus:border-2"
          onKeyDown={handleSearch}
          onChange={(e) => console.log(e.target.value.toLowerCase())}
        />
        <SearchIcon  color="#406a76" size={20} style={{position: 'relative', right: 34}}/>
      </div>
    )
}