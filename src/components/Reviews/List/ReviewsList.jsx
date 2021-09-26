import React from "react";
import { ReviewsItem } from "../../Reviews";
import NoReviews from "../NoReviews/NoReviews";

function ReviewsList({ items }) {
  return items.length > 0 ? (
    <ul>
      {items.map((item, idx) => (
        <ReviewsItem key={idx} item={item} />
      ))}
    </ul>
  ) : (
    <NoReviews />
  );
}

export default ReviewsList;
