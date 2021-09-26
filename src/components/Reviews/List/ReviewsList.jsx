import React from "react";
import ReviewsItem from "../Item/ReviewsItem";

function ReviewsList({ items }) {
  return (
    <ul>
      {items.map((item, idx) => (
        <ReviewsItem key={idx} item={item} />
      ))}
    </ul>
  );
}

export default ReviewsList;
