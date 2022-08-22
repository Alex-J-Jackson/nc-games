import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../api";
import ReviewCard from "./ReviewCard";

const ReviewSingleWithComments = () => {
  const [review, setReview] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();
  useEffect(() => {
    fetchReviewById(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading review...</p>;
  return (
    <article>
      <ReviewCard review={review} />
    </article>
  );
};

export default ReviewSingleWithComments;
