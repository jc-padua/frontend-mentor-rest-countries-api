import { FaRegMoon, FaRegSun } from 'react-icons/fa';

function ThemeButton({ theme, toggleTheme }) {
  return (
    <div
      className="flex items-center gap-2 hover:cursor-pointer"
      onClick={toggleTheme}
    >
      <span>
        {theme === 'light' ? (
          <FaRegMoon size={20} color="black" />
        ) : (
          <FaRegSun size={20} color="white" />
        )}
      </span>
      <p className={`${theme === 'light' ? 'text-black' : 'text-white'} `}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </p>
    </div>
  );
}

export default ThemeButton;
