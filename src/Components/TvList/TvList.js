import React, { useEffect, useState } from "react";
import CardsTv from "../CardTv/CardTv";
import "./TvList.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const TvList = () => {
  const [tvList, setTvList] = useState([]);
  const [page, setPage] = useState(1);
  const nextHandler = () => {
    setPage(page + 1);
    console.log(page);
  };
  const pevHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      alert("No previous page");
    }
  };
  // console.log(movieList);
  const { type } = useParams();

  const getData = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/tv/${
        type ? type : "popular"
      }?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=${page}`
    );
    setTvList(data.results);
  };
  useEffect(() => {
    getData();
  }, [type, page]);

  return (
    <div className="tv_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {tvList.map((tv) => (
          <CardsTv tv={tv} />
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

export default TvList;
