import React, { useEffect } from "react";
import { useState } from "react";
import { getMovieReview } from "../../common/tmdb-api";
import ReviewsList from "./List/ReviewsList";

function Reviews({ id }) {
  const [review, setReview] = useState([]);
  useEffect(() => {
    const getReview = async (id) => {
      const data = await (await getMovieReview(id)).data;
      setReview(data.results);
    };

    getReview(id);
  }, [id]);
  return <ReviewsList items={review} />;
}

export default Reviews;
