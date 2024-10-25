import { notFound } from "next/navigation";
import React from "react";

import  MovieContainer  from "@/containers/movie";
import  Movies  from "@/mocks/movies.json";



async function MoviePage({ params, searchParams }) {
    console.log({Movies});
    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id);

    if (!movieDetail) {
     notFound();
    }
  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;