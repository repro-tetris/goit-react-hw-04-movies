import React from "react";
import s from "./CastList.module.css";
import { CastItem } from "../../Cast";

function CastList({ items }) {
  //console.log(items);
  return (
    <ul className={s.list}>
      {items.map((item, idx) => (
        <CastItem key={idx} item={item} />
      ))}
    </ul>
  );
}

export default CastList;
