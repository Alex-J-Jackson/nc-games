import { fetchReviews } from "../api";
import ReviewInstance from "./ReviewInstance";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading reviews...</p>;
  return (
    <>
      {reviews.map((review) => (
        <article key={review.review_id}>
          <ReviewInstance review={review} />
        </article>
      ))}
    </>
  );
};

export default Reviews;
