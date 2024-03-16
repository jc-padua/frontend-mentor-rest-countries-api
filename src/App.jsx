import './App.css';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme === 'light' ? 'bg-[--White]' : 'bg-[--Dark-Blue]'}`}
    >
      <Home />
    </div>
  );
}

export default App;
