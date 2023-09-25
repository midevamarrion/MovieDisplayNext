'use client'
import { searchMovies } from "../utilities/utils";
import React, { useEffect, useState } from "react";
import Head from "next/head";

export const Navigation = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const handleInput = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLoading(true);
    try {
      const results = await searchMovies(searchValue);
      setSearchResults(results.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`navbar-container ${
        menuActive ? "menu-active" : ""
      } bg-gray-800 text-white p-4 flex justify-between items-center`}
    >
      <Head>
        <title>Moovie</title>
      </Head>

      <a className="logo text-2xl font-semibold">
        M<span className="text-orange">oo</span>vie
      </a>

      <form onSubmit={handleSearch} className="search-container">
        <input
          className="search-input bg-transparent border-none outline-none text-white"
          value={searchValue}
          onChange={handleInput}
          type="text"
          placeholder="Search"
        />
        <button
          type="submit"
          className="search-button bg-orange text-white px-2 py-1 rounded cursor-pointer"
        >
          Search
        </button>
      </form>

      <div className="flex items-center space-x-4">
        <a className="nav-link">Home</a>
        <a className="nav-link">My List</a>
        <button className="sign-in-button bg-orange text-white px-2 py-1 rounded cursor-pointer">
          Sign in
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="results-container absolute top-9 left-0 w-full bg-opacity-80 bg-black p-4 shadow-md z-10">
          <div className="search-results">
            <h2 className="text-white">Search Results:</h2>
            <ul>
              {searchResults.map((movie) => (
                <div className="movie-thumbnail flex items-center mb-2" key={movie.Id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.overview}
                    className="w-12 h-18 object-cover mr-2"
                  />
                  <p className="text-white">{movie.overview}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}

      {loading && <h6 className="loading-text mt-4">Searching...</h6>}
    </div>
  );
};
