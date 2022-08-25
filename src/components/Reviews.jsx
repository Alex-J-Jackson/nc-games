import { fetchReviews } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";

const Reviews = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState();
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(true);
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const handleOrder = (e) => {
    setOrder(e.target.value);
  };
  useEffect(() => {
    fetchReviews(category, sortBy, order).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category, sortBy, order]);
  return isLoading ? (
    <p>Loading reviews...</p>
  ) : (
    <>
      <FormControl id="sort-menu">
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Sort by
        </InputLabel>
        <NativeSelect onChange={(e) => handleSortBy(e)}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </NativeSelect>
      </FormControl>
      <FormControl id="order-menu">
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Order
        </InputLabel>
        <NativeSelect onChange={(e) => handleOrder(e)}>
          <option value="desc">↓</option>
          <option value="asc">↑</option>
        </NativeSelect>
      </FormControl>

      {reviews.length ? (
        <div className="reviews-list">
          {reviews.map((review) => (
            <ReviewCard key={review.review_id} review={review} />
          ))}
        </div>
      ) : (
        <p>Sorry, no such category found!</p>
      )}
    </>
  );
};

export default Reviews;
