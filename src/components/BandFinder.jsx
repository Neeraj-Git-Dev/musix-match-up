"use client";

import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import BandList from "./BandList";
import LoadingSpinner from "./LoadingSpinner";
import { fetchUserLocation, searchBands } from "../services/api";

const BandFinder = () => {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    const initializeLocation = async () => {
      try {
        setLoading(true);
        const detectedCity = await fetchUserLocation();
        setCurrentLocation(detectedCity);
        setCity(detectedCity);
        const bandsData = await searchBands(detectedCity);
        setBands(bandsData);
      } catch (err) {
        setError(
          "Unable to detect your location. Please enter a city manually."
        );
      } finally {
        setLoading(false);
      }
    };

    initializeLocation();
  }, []);

  const handleSearch = async (searchCity) => {
    try {
      setLoading(true);
      setError("");
      const bandsData = await searchBands(searchCity);
      setBands(bandsData);
      setCurrentLocation(searchCity);
    } catch (err) {
      setError("Failed to fetch bands. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-indigo-800 mb-4 tracking-tight">
          Find Band
        </h1>
        <p className="text-indigo-600 text-lg">
          Discover the sound. Find your band.
        </p>
      </header>

      <SearchBar
        onSearch={handleSearch}
        initialCity={city}
        disabled={loading}
      />

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-md shadow-sm">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {currentLocation && !error && (
        <div className="text-center text-indigo-600 mb-6 font-medium">
          <span className="inline-flex items-center">
            <svg
              className="h-5 w-5 mr-2"
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
            Showing results for:{" "}
            <span className="font-semibold ml-1">{currentLocation}</span>
          </span>
        </div>
      )}

      {loading ? <LoadingSpinner /> : <BandList bands={bands} />}
    </div>
  );
};

export default BandFinder;
