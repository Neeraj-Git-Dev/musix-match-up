const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      <p className="mt-4 text-indigo-600 font-medium">Loading bands...</p>
    </div>
  );
};

export default LoadingSpinner;
