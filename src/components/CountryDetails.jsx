import { useNavigate, useParams } from 'react-router-dom';
import countriesAPI from '../../data';
import Header from './Header';
import { useTheme } from 'src/context/ThemeContext';
import { FaArrowLeft } from 'react-icons/fa';

function CountryDetails() {
  const { theme } = useTheme();
  const { countryName } = useParams();
  const navigate = useNavigate();

  const formattedCountryName = countryName.replace(/-/g, ' ');

  const country = countriesAPI.find(
    country => country.name === formattedCountryName
  );

  if (!country) {
    return <div>Country not found</div>;
  }

  const countryBorders =
    country.borders?.map(
      border =>
        countriesAPI.find(country => country.alpha3Code === border)?.name
    ) || [];

  return (
    <div
      className={`text-${theme === 'light' ? 'black' : 'white'} bg-${
        theme === 'light' ? 'white' : '[--Dark-Blue]'
      }`}
    >
      <Header />
      <div className="px-8">
        <button
          className=" flex items-center gap-4 shadow-lg border-2 px-5 py-1"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={10} />
          Back
        </button>
        <div className="">
          <img
            src={country?.flags.svg}
            alt=""
            className="my-10 shadow-xl object-cover"
          />
          <h2 className="font-bold text-2xl mb-8"> {country.name}</h2>
          <div className="flex flex-col gap-3 mb-12">
            <p className="font-bold">
              Native Name:
              <span className="font-normal"> {country?.nativeName}</span>
            </p>
            <p className="font-bold">
              Population:
              <span className="font-normal"> {country?.population}</span>
            </p>
            <p className="font-bold">
              Region: <span className="font-normal"> {country?.region}</span>
            </p>
            <p className="font-bold">
              Sub Region:
              <span className="font-normal"> {country?.subregion}</span>
            </p>
            <p className="font-bold">
              Capital: <span className="font-normal"> {country?.capital}</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 mb-12">
            <p className="font-bold">
              Top Level Domain:
              <span className="font-normal"> {country?.topLevelDomain}</span>
            </p>
            <p className="font-bold">
              Currencies:
              <span className="font-normal">
                {' '}
                {country?.currencies[0].code}
              </span>
            </p>
            <p className="font-bold">
              Languages:
              <span className="font-normal">
                {country?.languages
                  .map(item => {
                    return item.name;
                  })
                  .join(', ')}
              </span>
            </p>
          </div>
          <h2 className="text-lg font-bold mb-3">Border Countries:</h2>
          <div className="flex flex-wrap gap-2 pb-8">
            {countryBorders?.length < 1
              ? 'No border countries'
              : countryBorders.map(border => (
                  <div key={border} className="border-2 px-4 py-1 rounded-md">
                    {border}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
