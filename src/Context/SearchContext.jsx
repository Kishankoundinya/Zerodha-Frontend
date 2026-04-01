import React, { createContext, useState, useContext, useEffect } from 'react';


const SearchContext = createContext();


export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};


export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(() => {
    
    const saved = localStorage.getItem('stockSearchValue');
    return saved || 'AAPL'; 
  });

  
  useEffect(() => {
    localStorage.setItem('stockSearchValue', searchValue);
  }, [searchValue]);

  const updateSearchValue = (value) => {
    console.log('SearchContext: Updating search value to:', value);
    setSearchValue(value);
  };

  const value = {
    searchValue,
    updateSearchValue,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};