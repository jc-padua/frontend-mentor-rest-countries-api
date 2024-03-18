import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'src/context/ThemeContext';

function CountryCard({ country }) {
  const { theme } = useTheme();

  return (
    <Link to={`/country/${country.name.replace(/\s+/g, '-')}`}>
      <div key={country.numericCode} className="card m-10 rounded-lg shadow-xl">
        <img src={country.flags.svg} className="rounded-t-lg" alt="" />
        <div className="p-6">
          <p
            className={`font-extrabold mb-4 text-${
              theme === 'light' ? 'dark' : 'white'
            }`}
          >
            {country.name}
          </p>
          <p
            className={`font-semibold text-${
              theme === 'light' ? 'dark' : 'white'
            }`}
          >
            Population: <span className="font-light">{country.population}</span>
          </p>
          <p
            className={`font-semibold text-${
              theme === 'light' ? 'dark' : 'white'
            }`}
          >
            Region: <span className="font-light">{country.region}</span>
          </p>
          <p
            className={`font-semibold text-${
              theme === 'light' ? 'dark' : 'white'
            }`}
          >
            Capital: <span className="font-light">{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
