import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const SearchContext = createContext();

// Custom Hook to use Search Context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

// Context Provider Component
export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('stockSearchValue');
    return saved || 'AAPL'; // Default to AAPL
  });

  // Update localStorage whenever searchValue changes
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