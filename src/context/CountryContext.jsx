import { createContext, useContext, useState } from 'react';

export const CountryContext = createContext('');

export const CountryProvider = ({ children }) => {
  const [searchCountry, setSearchCountry] = useState('');
  return (
    <CountryContext.Provider
      value={{
        searchCountry,
        setSearchCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
