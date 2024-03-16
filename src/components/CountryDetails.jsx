import { useParams } from 'react-router-dom';
import countriesAPI from '../../data';
import Header from './Header';
import { useTheme } from 'src/context/ThemeContext';
import { FaArrowLeft } from 'react-icons/fa';

function CountryDetails() {
  const { theme } = useTheme();
  const { countryName } = useParams();
  const countries = countriesAPI.find(country => country.name === countryName);

  if (!countries) {
    return <div>Country not found</div>;
  }

  return (
    <div className={`text-${theme === 'light' ? 'black' : 'white'}`}>
      <Header />
      <div className="px-8">
        <button className="flex items-center gap-4 shadow-lg border-2 px-5 py-1">
          <FaArrowLeft size={10} />
          Back
        </button>
        <div className="">
          <img src={countries.flags.svg} alt="" />
          <h2>{countries.name}</h2>
          <p>Native Name: {countries.nativeName}</p>
          <p>Population: {countries.population}</p>
          <p>Region: {countries.region}</p>
          <p>Sub Region: {countries.subregion}</p>
          <p>Capital: {countries.capital}</p>

          <p>Top Level Domain: {countries.topLevelDomain}</p>
          <p>Currencies: {countries.currencies[0].code}</p>
          <p>
            Languages:{' '}
            {countries.languages
              .map(item => {
                return item.name;
              })
              .join(', ')}
          </p>
          <h2>Border Countries:</h2>
          <div className="">{}</div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
