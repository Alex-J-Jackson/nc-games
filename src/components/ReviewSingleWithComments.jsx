import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../api";
import Comments from "./Comments";
import ReviewCard from "./ReviewCard";

const ReviewSingleWithComments = () => {
  const [review, setReview] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { review_id } = useParams();
  useEffect(() => {
    fetchReviewById(review_id)
      .then((review) => {
        setReview(review);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [review_id]);
  return error ? (
    <p>Sorry, no review found with that ID.</p>
  ) : isLoading ? (
    <p>Loading review...</p>
  ) : (
    <>
      <article>
        <ReviewCard review={review} clicked={true} />
      </article>
      <h2 className="comments-heading">Comments</h2>
      <section>
        <Comments review_id={review_id} />
      </section>
    </>
  );
};

export default ReviewSingleWithComments;
