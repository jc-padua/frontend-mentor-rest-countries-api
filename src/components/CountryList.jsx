import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import countriesAPI from '../../data';
import { useTheme } from 'src/context/ThemeContext';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState(7);
  const { theme } = useTheme();

  const loadMoreCountries = () => {
    setVisibleCountries(prevCount => prevCount + 7);
  };

  useEffect(() => {
    setCountries(countriesAPI);
  }, []);

  return (
    <div className={`text-${theme === 'light' ? 'black' : 'white'}`}>
      <section>
        {countries.slice(0, visibleCountries).map(country => {
          return <CountryCard country={country} key={country.name} />;
        })}
        <p
          onClick={loadMoreCountries}
          className={`hover:cursor-pointer active:text-gray-500 text-center text-${
            theme === 'light' ? 'black' : 'white'
          } mb-4`}
        >
          Load more countries...
        </p>
      </section>
    </div>
  );
}

export default CountryList;
