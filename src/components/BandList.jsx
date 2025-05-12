"use client";

import { useState } from "react";
import BandCard from "./BandCard";
import Pagination from "./Pagination";

const BandList = ({ bands }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const bandsPerPage = 9;

  const indexOfLastBand = currentPage * bandsPerPage;
  const indexOfFirstBand = indexOfLastBand - bandsPerPage;
  const currentBands = bands.slice(indexOfFirstBand, indexOfLastBand);
  const totalPages = Math.ceil(bands.length / bandsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  if (bands.length === 0) {
    return (
      <div className="text-center py-16">
        <svg
          className="mx-auto h-12 w-12 text-indigo-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-indigo-900">
          No bands found
        </h3>
        <p className="mt-1 text-indigo-500">
          Try searching for a different location.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentBands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BandList;
