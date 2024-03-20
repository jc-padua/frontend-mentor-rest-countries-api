import ThemeButton from 'src/components/ThemeButton';
import { useTheme } from 'src/context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={` sticky top-0 backdrop-blur-lg`}>
      <header className={`shadow-md flex justify-between p-6 mb-8 `}>
        <h2
          className={`font-bold ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          Where in the world?
        </h2>
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
      </header>
    </div>
  );
}

export default Header;
