"use client"
import React, { useState, useEffect } from 'react';
import { NEXT_PUBLIC_IMAGE_BASE_URL } from '../config';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { getUpcomingMovies, getMovies } from '../utilities/utils';
interface Movie {
  id: number;
  title: string;
  overview: string;
  rating: number;
  poster_path: string;
}
const CustomPrevArrow = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <button
      className="custom-arrow prev-arrow absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white"
      onClick={onClick}
    >
      &#10094;
    </button>
  );
};
const CustomNextArrow = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <button
      className="custom-arrow next-arrow absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white"
      onClick={onClick}
    >
      &#10095;
    </button>
  );
};
const MovieSlider = () => {
  const [comingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        console.log({ movies });
        setUpcomingMovies(movies.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
  };
  const limit = 20;
  const slicedMovies = comingMovies ? comingMovies.slice(15, limit) : [];
  if (loading) {
    return <h1>Loading movies...</h1>;
  }
  return (
   <div className="slider-container relative flex justify-center  ">
      <Slider {...settings} className="container center bg-cover">
        {comingMovies && comingMovies.length > 0 ? (
          slicedMovies.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <div
                key={movie.id}
                className="image-container relative flex justify-center h-screen"
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${movie.poster_path})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
<div className="movie-info-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white p-4">
  <h3 className="text-xl font-semibold text-blue-500">{movie.title}</h3>
  <p className="text-white w-1/2">{movie.overview}</p>
  <span className="text-pale">{movie.rating}</span>
  <div className="buttons-container mt-2">
    <button className="watch-now-button bg-blue-500 text-white px-2 py-1 rounded cursor-pointer mr-2">
      Watch Now
    </button>
    <button className="add-to-favorites-button border border-white-500 text-white px-2 py-1 rounded cursor-pointer">
    Add to Favorites
   </button>
  </div>
</div>
              </div>
            </Link>
          ))
        ) : (
          <h1>No Movies Available</h1>
        )}
      </Slider>
    </div>
  );
};
export default MovieSlider;