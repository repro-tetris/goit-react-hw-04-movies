import React from "react";

function ReviewsItem({ item: { author, content } }) {
  return (
    <li>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  );
}

export default ReviewsItem;
