 import { createAction } from "@reduxjs/toolkit";
import {
  axiosGetUtils,
} from "../../Axios/axios.utils";
import { API_URLS } from "../../ApiUrls/ApiUrls";

export const movieStateChange = createAction(
  "MOVIE_STATE_CHANGE",
  (data) => {
    return {
      payload: data,
    };
  }
);

export const getMovies = (data) => async (dispatch) => {
  try {
    console.log('ZZZZZZ');
    movieStateChange({ isDataLoading: true });
    const response = await axiosGetUtils(
      API_URLS.GET_ALL_MOVIES
    );
    dispatch(
      movieStateChange({ isDataLoading: false,  movies:response })
    );
    console.log("response", response);
  } catch (error) {
    console.log("error");
  }
};
export const getMovieDetails = (id,moviesDetails=[]) => async (dispatch) => {
  try {
    movieStateChange({ isDataLoading: true });
    const response = await axiosGetUtils(
      API_URLS.GET_MOVIE_DETAILS_BY_ID,
      { id }
    );
    console.log('HHHHH',moviesDetails, response)

    dispatch(
      movieStateChange({
        isDataLoading: false,
        moviesDetails: [...moviesDetails, response[0]],
      })
    );
    return response;
  } catch (error) {
    console.log("error");
  }
};


