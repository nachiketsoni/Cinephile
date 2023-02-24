import React, { useEffect, useState } from "react";
import Cards from "../Card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const nextHandler = () => {
    setPage(page + 1);
  };
  const pevHandler = () => {
   if (page > 1) {
     setPage(page - 1);
    } else {
      alert("No previous page");
    }
  };

  const { type } = useParams();
  // console.log(movieList);

  const getData = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=${page}`
    );
    setMovieList(data.results);
  };
  useEffect(() => {
    getData();
  }, [type, page]);

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
      <div className="btn">
        <button className="previousPage" onClick={pevHandler}>
          Previous
        </button>
        <button className="nextPage" onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
