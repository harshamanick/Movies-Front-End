import React from "react";
import cx from "classnames";
import styles from "./ListItem.module.scss";
import gClasses from "../../Common.module.scss";
export default function ListItem(props) {
  const { onRowClick, data, } = props;
  return (
    <div
      className={cx(styles.Container, gClasses.MB5)}
      onClick={() => {
        onRowClick(data?.movie_Id);
      }}
    >
      <div className={cx(gClasses.Dflex, gClasses.JCCenter, gClasses.W100)}>
        <div
          title="Company name"
          className={cx(gClasses.Name, gClasses.ML15)}
        >
          {data?.movie_name}
        </div>
      </div>
    </div>
  );
}
