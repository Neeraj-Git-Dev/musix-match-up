"use client";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 6;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      if (start > 2) {
        pageNumbers.push("...");
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (end < totalPages - 1) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md flex items-center ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-indigo-600 hover:bg-indigo-50 border border-indigo-200 shadow-sm"
        }`}
      >
        <svg
          className="h-5 w-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </button>

      <div className="hidden sm:flex space-x-1">
        {getPageNumbers().map((number, index) => (
          <button
            key={index}
            onClick={() =>
              typeof number === "number" ? onPageChange(number) : null
            }
            disabled={typeof number !== "number"}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              number === currentPage
                ? "bg-indigo-600 text-white font-medium"
                : typeof number === "number"
                ? "bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-200"
                : "bg-white text-gray-400 cursor-default"
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md flex items-center ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-indigo-600 hover:bg-indigo-50 border border-indigo-200 shadow-sm"
        }`}
      >
        Next
        <svg
          className="h-5 w-5 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
