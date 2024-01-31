import React from "react";
import s from "../style/Page.module.css";
export default function Page(props) {
  return (
    <div className={s.film_details}>
      <h1>Любимое аниме</h1>
      <div className={s.film}>
        <div className={s.info}>
          <h2>{props.title}</h2>
          <p>
            <span>Режисер:</span> {props.director}
          </p>
          <p>
            <span>Год выпуска:</span> {props.year}
          </p>
          <p>
            <span>Киностудия: </span>
            {props.studio}
          </p>
          <p>
            <span>Томы манги: </span>
            {props.manga}
          </p>
        </div>
        <img src={props.posterUrl} alt="Постер фільму" />
      </div>
    </div>
  );
}
