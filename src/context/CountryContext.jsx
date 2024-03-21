import { createContext, useContext, useState } from 'react';

export const CountryContext = createContext('');

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState('');
  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
