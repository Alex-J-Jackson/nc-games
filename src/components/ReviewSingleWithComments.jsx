import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../api";
import Comments from "./Comments";
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
  }, [review_id]);
  if (isLoading) return <p>Loading review...</p>;
  return (
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
