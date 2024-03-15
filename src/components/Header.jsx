import ThemeButton from 'src/components/ThemeButton';
import { useTheme } from 'src/context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="shadow-md flex justify-between p-6 mb-8 ">
      <h2 className={`font-bold text-${theme === 'light' ? 'black' : 'white'}`}>
        Where in the world?
      </h2>
      <ThemeButton toggleTheme={toggleTheme} theme={theme} />
    </header>
  );
}

export default Header;
