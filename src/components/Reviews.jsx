import { fetchReviews } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchReviews(category).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category]);
  return isLoading ? (
    <p>Loading reviews...</p>
  ) : (
    <>
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </>
  );
};

export default Reviews;
