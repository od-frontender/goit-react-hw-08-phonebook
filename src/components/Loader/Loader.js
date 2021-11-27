import React from "react";
import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

export default function LoaderFnc() {
  return (
    <div className={s.loader}>
      <Loader
        type="ThreeDots"
        color="green"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}
