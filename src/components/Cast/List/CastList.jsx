import React from "react";
import { CastItem } from "../../Cast";

function CastList({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item, idx) => (
        <CastItem key={idx} item={item} />
      ))}
    </ul>
  );
}

export default CastList;
