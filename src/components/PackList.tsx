import React from 'react';
import { usePackContext } from '../context/PackContext';
import PackItem from './PackItem';
import Pagination from './Pagination';
import './../styles/pack.css';

const PackList: React.FC = () => {
  const { paginatedPacks } = usePackContext();

  return (
    <div>
      {paginatedPacks.length === 0 ? (
        <div className="no-packs">🚨 Packs not found 🚨</div>
      ) : (
        <div className="pack-list">
          {paginatedPacks.map((pack, index) => (
            <PackItem key={`${pack.title}-${index}`} pack={pack} />
          ))}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default PackList;