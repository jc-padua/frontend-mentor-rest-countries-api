import CountryCard from './CountryCard';
import countriesAPI from '../../data';
import { useEffect, useState } from 'react';
import { useTheme } from 'src/context/ThemeContext';
import { useCountry } from 'src/context/CountryContext';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const { searchCountry } = useCountry();
  const { theme } = useTheme();
  const [visibleCountries, setVisibleCountries] = useState(7);

  const loadMoreCountries = () => {
    setVisibleCountries(prevCount => prevCount + 7);
  };

  const searchedCountries = () => {
    if (!searchCountry) return countries.slice(0, visibleCountries);

    return countries.filter(item =>
      item.name.toLowerCase().includes(searchCountry.toLowerCase())
    );
  };

  useEffect(() => {
    setCountries(countriesAPI);
  }, []);

  return (
    <section className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>
      {searchedCountries().map(country => {
        return <CountryCard country={country} key={country.name} />;
      })}
      <p
        onClick={loadMoreCountries}
        className={`hover:cursor-pointer active:text-gray-500 text-center ${
          theme === 'light' ? 'text-black' : 'text-white'
        } `}
      >
        Load more countries...
      </p>
    </section>
  );
}

export default CountryList;
