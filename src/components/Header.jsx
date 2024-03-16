import ThemeButton from 'src/components/ThemeButton';
import { useTheme } from 'src/context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`text-${theme === 'light' ? 'black' : 'white'}`}>
      <header className="shadow-md flex justify-between p-6 mb-8 ">
        <h2 className={`font-bold `}>Where in the world?</h2>
        <ThemeButton toggleTheme={toggleTheme} theme={theme} />
      </header>
    </div>
  );
}

export default Header;
