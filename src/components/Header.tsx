import React, { useState } from 'react';
import './../styles/header.css';
import { usePackContext } from './../context/PackContext';

const Header: React.FC = () => {
  const { filters, setFilters } = usePackContext();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    setFilters({ ...filters, search: searchInput });
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, filterType: e.target.value as '' | 'author' | 'title' | 'price' | 'size' | 'rank' });
  };

  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search for a pack..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className='header-children'>
      <select onChange={handleFilterChange} value={filters.filterType}>
        <option value="">No Filters</option>
        <option value="author">Author (A-Z)</option>
        <option value="title">Title (A-Z)</option>
        <option value="price">Price</option>
        <option value="size">Size</option>
        <option value="rank">Rank</option>
      </select>
      <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;
