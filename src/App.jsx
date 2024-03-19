import './App.css';
import Home from 'src/components/Home';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/country/:countryName" element={<CountryDetails />} />
    </Routes>
  );
}

export default App;
