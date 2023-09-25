'use client'
import { useState, useEffect } from "react";
import { getMovieDetails } from "@/app/utilities/utils";
import { NEXT_PUBLIC_IMAGE_BASE_URL } from "@/app/config";
const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
  const [movieDetail, setMovieDetail] = useState<any>(null);
  useEffect(() => {
    (async () => {
      try {
        const movieDetailData = await getMovieDetails(movieId);
        setMovieDetail(movieDetailData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    })();
  }, [movieId]);
  return (
    <div className="flex bg-blue h-screen">
      {movieDetail && (
        <div className="flex">
          <img
            src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="w-3/4 h-2/3 mt-40 ml-60 relative overflow-hidden rounded p-4  transition-transform hover:transform hover:translate-y-0 hover:-translate-x-2 hover:scale-105"
          />
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-2xl font-bold ml-9 text-blue-500">{movieDetail.title}</h1>
            <p className="mt-2 mr-60 ml-10 text-white">{movieDetail.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default MovieDetail;