import React from "react";
import gClasses from "../../Common.module.scss";
import cx from "classnames";
import TextField from "@mui/material/TextField";

// Input base component.

export default function Input(props) {
  const {
    label,
    value,
  } = props;

  return (
    <div>
      <div className={cx(gClasses.W100)}>
            <div className={cx(gClasses.FontWeight)}>{label}</div>
            <div className={gClasses.Content}>{value}</div>
      </div>
    </div>
  );
}
