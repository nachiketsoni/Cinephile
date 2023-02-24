import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./CardTv.css";
import { Link } from "react-router-dom";
const CardTv = ({ tv }) => {
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
          to={`/tv/${tv.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards_img"
              src={`https://image.tmdb.org/t/p/original${tv ? tv.poster_path : ""}`}
              alt=""
            />
            <div className="cards_overlay">
              <div className="cards_title">{tv?tv.original_title:""} </div>
              <div className="cards_Runtime">
                {tv?tv.release_date:""}
                <span className="card_rating">
                    {tv?tv.vote_average:""}
                    <i className="fas fa-star"/>{""}
                </span>
              </div>
              <div className="cards_description">{tv ? tv.overview.slice(0,118)+"...":""} </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CardTv;
