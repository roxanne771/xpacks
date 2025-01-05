import React from 'react';
import './../styles/pagination.css';
import { usePackContext } from '../context/PackContext';

const Pagination: React.FC = () => {
  const { currentPage, totalPages, setCurrentPage } = usePackContext();

  if (totalPages <= 1) return null;
  
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        ❮ Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next ❯
      </button>
    </div>
  );
};

export default Pagination;