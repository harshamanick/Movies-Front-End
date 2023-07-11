import React from "react";
import gClasses from "../Common.module.scss";
import cx from "classnames";
import styles from "./MovieForm.module.scss";
import Input from "../Components/Input/Input";

export default function MovieForm(props) {
  const { data } = props;
  return (
    <div className={cx(styles.MainContainer)}>
      <div className={cx(gClasses.W400)}>
        <Input
          label="Movie Name"
          value={data?.movie_name}
          isRequired
        />
        <div className={cx(gClasses.MT30)}>
          <Input
            label="Actor"
            value={data?.actor}
            isRequired
          />
        </div>
        <div className={cx(gClasses.MT30)}>
          <Input
            label="Rated"
            value={data?.rated}
            isRequired
          />
        </div>
        <div className={cx(gClasses.MT30)}>
          <Input
            label="Director"
            value={data?.director}
          />
        </div>
      </div>
    </div>
  );
}
