import React from 'react';

function CountryList() {
  return (
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
  );
}

export default CountryList;
