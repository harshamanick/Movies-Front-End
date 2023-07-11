import React, { useState } from "react";
import cx from "classnames";
import styles from "./LandingPage.module.scss";
import Header from "./Header/Header";
import Movies from "./Movies/Movies";
import DetailsPage from "../DetailsPage/DetailePage";
export default function LandingPage() {
  const [showDetails, setShowDetails] = useState(false);
  const [movieId, setMovieId] =  useState('');
  return (
    <div className={cx(styles.MainContainer)}>
      <Header />

      <div className={cx(styles.Body)}>
        {showDetails ? (
          <DetailsPage
            onCloseClick={() => {
              setShowDetails(false);
            }}
            movieId={movieId}
          />
        ) : (
          <Movies
            onRowClick={(id) => {
              setMovieId(id);
              setShowDetails(true);
            }}
          />
        )}
      </div>
    </div>
  );
}
