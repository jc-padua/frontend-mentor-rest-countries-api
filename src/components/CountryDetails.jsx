import React from 'react';
import { useParams } from 'react-router-dom';
import countriesAPI from '../../data';

function CountryDetails() {
  const { countryName } = useParams();
  const countries = countriesAPI.find(country => country.name === countryName);

  console.log(countries);

  if (!countries) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1>{countries.name}</h1>
    </div>
  );
}

export default CountryDetails;
