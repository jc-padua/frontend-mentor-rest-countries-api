import { useTheme } from 'src/context/ThemeContext';
import Search from './Search';
import countriesAPI from '../../data';
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

function Home() {
  const { theme } = useTheme();
  const [countries, setCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState(7);
  const [regions, setRegions] = useState([]);

  const loadMoreCountries = () => {
    setVisibleCountries(prevCount => prevCount + 7);
  };

  useEffect(() => {
    setCountries(countriesAPI);

    const regionSet = new Set(countries.map(country => country.region));
    const sortedRegions = [...regionSet].sort((a, b) => a.localeCompare(b));
    setRegions(sortedRegions);
  }, [countries]);

  return (
    <div>
      <Search />
      <select
        name=""
        id=""
        className={`w-1/2 mx-4 p-3 mb-8 shadow-md rounded-md bg-${
          theme === 'light' ? 'white' : '[--Dark-Blue]'
        } text-${theme === 'light' ? 'dark' : 'white'}`}
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

      <section>
        {countries.slice(0, visibleCountries).map(country => {
          return <CountryCard country={country} key={country.name} />;
        })}
        <p
          onClick={loadMoreCountries}
          className={`hover:cursor-pointer active:text-gray-500 text-center text-${
            theme === 'light' ? 'black' : 'white'
          }`}
        >
          Load more countries...
        </p>
      </section>
    </div>
  );
}

export default Home;
