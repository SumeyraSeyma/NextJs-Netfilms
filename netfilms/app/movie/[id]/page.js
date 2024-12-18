import { notFound } from "next/navigation";
import React from "react";

import  MovieContainer  from "@/containers/movie";
import { getMovie } from "@/services/movie";

async function MoviePage({ params, searchParams }) {
  const movieDetail = await getMovie(params.id);

    if (!movieDetail) {
     notFound();
    }
  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;