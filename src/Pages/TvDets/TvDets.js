import React, { useEffect, useState } from "react";
import "./TvDets.css";
import { useParams } from "react-router-dom";
import {Link } from "react-router-dom";

import axios from "axios";

const TvDets = () => {
  const [currentTvDetail, setTv] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/tv/${id}?api_key=678c9b4411286f011b3e28f4eae6599e&language=en-US&page=1`
    );
    setTv(data);
  };

  return (
    <div className="tv">
      <div className="tv__intro">
        <img
          className="tv__backdrop"
          src={`https://image.tmdb.org/t/p/w500${
            currentTvDetail.backdrop_path ||
            "/csU9xxVn8tVyhwx4rw96zse1xrU.jpg"
          }`}
          alt=""
        />
      </div>

      <div className="tv__detail">
        <div className="tv__detailLeft">
          <div className="tv__posterBox">
            <img
              className="tv__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentTvDetail ? currentTvDetail.poster_path : ""
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="tv__detailRight">
          <div className="tv__detailRightTop">
            <div className="tv__name">
              {currentTvDetail ? currentTvDetail.original_title : ""}
            </div>
            <div className="tv__tagline">
              {currentTvDetail ? currentTvDetail.tagline : ""}
            </div>
            <div className="tv__rating">
              {currentTvDetail ? currentTvDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="tv__voteCount">
                {currentTvDetail
                  ? "(" + currentTvDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="tv__runtime">
              {currentTvDetail ? currentTvDetail.runtime + " mins" : ""}
            </div>
            <div className="tv__releaseDate">
              {currentTvDetail
                ? "Release date: " + currentTvDetail.release_date
                : ""}
            </div>
            <div className="Tv__genres">
              {currentTvDetail && currentTvDetail.genres
                ? currentTvDetail.genres.map((genre) => (
                    <>
                      <span className="tv__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="tv__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentTvDetail ? currentTvDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="tv__links">
        <div className="tv__heading">Useful Links</div>
        {currentTvDetail && currentTvDetail.homepage && (
          <Link to="/" style={{ textDecoration: "none" }}
          >
            <p>
              <span className="tv__homeButton tv__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </Link>
        )}
        {currentTvDetail && currentTvDetail.imdb_id && (
          <Link
          to="/"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="tv__imdbButton tv__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </Link>
        )}
      </div>
      <div className="tv__heading">Production companies</div>
      <div className="tv__production">
        {currentTvDetail &&
          currentTvDetail.production_companies &&
          currentTvDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="tv__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                    alt=""
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default TvDets;
