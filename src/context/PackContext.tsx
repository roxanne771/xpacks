import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { fetchJSON } from '../utils/fetchJSON';

export interface Pack {
  title: string;
  description: string[];
  price: number;
  promotionalPrice: number;
  size: string;
  imageURL: string[];
  videoURL: string[];
  author: string;
  rank: number;
  getUrl: string;
  keywords: string[];
}

interface PackContextProps {
  packs: Pack[];
  filteredPacks: Pack[];
  paginatedPacks: Pack[];
  filters: {
    search: string;
    filterType: 'author' | 'title' | 'price' | 'size' | 'rank' | '';
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      search: string;
      filterType: 'author' | 'title' | 'price' | 'size' | 'rank' | '';
    }>
  >;
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
}

const PackContext = createContext<PackContextProps | undefined>(undefined);

export const PackProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [packs, setPacks] = useState<Pack[]>([]);
  const [filteredPacks, setFilteredPacks] = useState<Pack[]>([]);
  const [filters, setFilters] = useState<{
    search: string;
    filterType: '' | 'author' | 'title' | 'price' | 'size' | 'rank';
  }>({
    search: '',
    filterType: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchPacks = async () => {
      try {
        const data = await fetchJSON<Pack[]>('./../utils/packs.json');
        console.log('Fetched packs:', data);
        setPacks(data);
      } catch (error) {
        console.error('Error fetching packs:', error);
      }
    };
    fetchPacks()
      .then(() => console.log('Fetching packs completed successfully.'))
      .catch((err) => console.error('Error in fetchPacks:', err));
  }, []);

  useEffect(() => {
    let updatedPacks = [...packs];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      updatedPacks = updatedPacks.filter(
        (pack) =>
          pack.title.toLowerCase().includes(searchLower) ||
          pack.author.toLowerCase().includes(searchLower) ||
          pack.keywords.some((keyword) => keyword.toLowerCase().includes(searchLower))
      );
    }

    switch (filters.filterType) {
      case 'author':
        updatedPacks.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'title':
        updatedPacks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price':
        updatedPacks.sort((a, b) => {
          const priceA = a.promotionalPrice !== undefined ? a.promotionalPrice : a.price;
          const priceB = b.promotionalPrice !== undefined ? b.promotionalPrice : b.price;
          return priceA - priceB;
        });
        break;
      case 'size':
        const parseSize = (size: string) => {
          const unit = size.slice(-2).toLowerCase();
          const value = parseFloat(size.slice(0, -2));
          const unitFactor = { mb: 1, gb: 1024, tb: 1024 * 1024 }[unit] || 1;
          return value * unitFactor;
        };
        updatedPacks.sort((a, b) => parseSize(b.size) - parseSize(a.size));
        break;
      default:
        updatedPacks.sort((a, b) => b.rank - a.rank);
        break;
    }

    setFilteredPacks(updatedPacks);
    if (filters.search || filters.filterType) {
      setCurrentPage(1);
    }
  }, [packs, filters]);

  const paginatedPacks = filteredPacks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.max(1, Math.ceil(filteredPacks.length / itemsPerPage));

  return (
    <PackContext.Provider
      value={{
        packs,
        filteredPacks,
        paginatedPacks,
        filters,
        setFilters,
        currentPage,
        totalPages,
        setCurrentPage,
        itemsPerPage,
      }}
    >
      {children}
    </PackContext.Provider>
  );
};

export const usePackContext = (): PackContextProps => {
  const context = useContext(PackContext);
  if (!context) {
    throw new Error('usePackContext must be used within a PackProvider');
  }
  return context;
};
