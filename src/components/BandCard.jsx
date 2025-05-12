const BandCard = ({ band }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-indigo-50">
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-900 mb-3 line-clamp-1">
          {band.name}
          {band.disambiguation && (
            <span className="text-sm font-normal text-indigo-400 ml-2">
              ({band.disambiguation})
            </span>
          )}
        </h3>

        <div className="space-y-3">
          {band["life-span"]?.begin && (
            <div className="flex items-center text-indigo-600">
              <svg
                className="h-5 w-5 mr-2 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">
                Founded:{" "}
                <span className="text-gray-700">{band["life-span"].begin}</span>
              </span>
            </div>
          )}

          {band.area?.name && (
            <div className="flex items-center text-indigo-600">
              <svg
                className="h-5 w-5 mr-2 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-medium">
                Location:{" "}
                <span className="text-gray-700">{band.area.name}</span>
              </span>
            </div>
          )}
        </div>

        {band.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {band.tags.slice(0, 5).map((tag) => (
              <span
                key={tag.name}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BandCard;
