import { FaSearch } from 'react-icons/fa';
import { useTheme } from 'src/context/ThemeContext';

function Search() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center gap-4 mx-4 p-2 mb-8 shadow-md rounded-md">
      <FaSearch size={20} color="#9da2b5" />
      <div className="w-full">
        <input
          type="text"
          name=""
          id=""
          className={`w-full py-2 outline-none bg-${
            theme === 'light' ? 'white' : '[--Dark-Blue]'
          }`}
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
}

export default Search;
