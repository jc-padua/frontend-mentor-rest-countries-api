import { useTheme } from 'src/context/ThemeContext';
import CountryList from './CountryList';
import Header from './Header';
import Search from './Search';
import { useEffect, useState } from 'react';
import countriesAPI from '../../data';

function Home() {
  const { theme } = useTheme();
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    setCountries(countriesAPI);

    const regionSet = new Set(countries.map(country => country.region));
    const sortedRegions = [...regionSet].sort((a, b) => a.localeCompare(b));
    setRegions(sortedRegions);
  }, [countries]);

  return (
    <div
      className={` ${theme === 'light' ? 'bg-[--White]' : 'bg-[--Dark-Blue]'}`}
    >
      <Header />
      <Search />
      <select
        name=""
        id=""
        className={`w-1/2 mx-4 p-3 mb-8 shadow-md rounded-md bg-${
          theme === 'light' ? 'white' : '[--Dark-Blue]'
        } ${theme === 'light' ? 'text-black' : 'text-white'}`}
        defaultValue={{ label: 'Filter by Region' }}
      >
        <option value="">Filter by Region</option>
        {regions.map(region => {
          return (
            <option value="" key={region}>
              {region}
            </option>
          );
        })}
      </select>
      <CountryList />
    </div>
  );
}

export default Home;
