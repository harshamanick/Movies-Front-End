import React, { useEffect } from "react";
import ListItem from "../ListItem/ListItem";
import { getMovies } from "../../Redux/Action/Movie.action";
import { useDispatch, useSelector } from "react-redux";

export default function Movies(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const { onRowClick } = props;
  return (
    <div>
      <div>
        {state?.movies?.map((data) => (
          <ListItem
            onRowClick={onRowClick}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}
