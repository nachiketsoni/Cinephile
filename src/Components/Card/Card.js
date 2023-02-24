import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ movie }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} width={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards_img"
              src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
              alt=""
            />
            <div className="cards_overlay">
              <div className="cards_title">{movie?movie.original_title:""} </div>
              <div className="cards_Runtime">
                {movie?movie.release_date:""}
                <span className="card_rating">
                    {movie?movie.vote_average:""}
                    <i className="fas fa-star"/>{""}
                </span>
              </div>
              <div className="cards_description">{movie ? movie.overview.slice(0,118)+"...":""} </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
