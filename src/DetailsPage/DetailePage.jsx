import React, { useEffect } from "react";
import { Card } from "antd";
import CloseIcon from "../Icon/CloseIcon";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../Redux/Action/Movie.action";
import gClasses from '../Common.module.scss';
import MovieForm from "../MovieForm/MovieForm";

export default function DetailsPage(props) {
  const { movieId, onCloseClick } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.movies);
  const movieDetails = state?.moviesDetails;
  const data = movieDetails?.find((item) => item._id === movieId) || {};

  useEffect(() => {
    if(!movieDetails?.some((item) => item._id === movieId) )
    dispatch(getMovieDetails(movieId, movieDetails));
  }, []);
  const tabListNoTitle = [
    {
      key: "Details",
      tab: "Details",
    }
  ];
  return (
    <>
      <Card
        style={{
          width: "100%",
          height: "100%",
        }}
        tabList={tabListNoTitle}
        activeTabKey="Details"
        tabBarExtraContent={
            <div
              className={cx(
                gClasses.Dflex,
                gClasses.AlignItemCenter,
                gClasses.Gap10
              )}
            >
              <div onClick={onCloseClick} className={gClasses.CursorPointer}>
                {" "}
                <CloseIcon />
              </div>
            </div>
          }
      >
          <MovieForm
            data={data}
            isEdit={false}
            errorList={state?.companyErrorList}
          />
      </Card>
    </>
  );
}
