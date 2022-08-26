import { useContext, useEffect, useState } from "react";
import { fetchReviews } from "../api";
import { UserContext } from "../contexts/User";
import UserReviewCard from "./UserReviewCard";

const UserReviews = () => {
  const { user } = useContext(UserContext);
  const [userReviews, setUserReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("noo");
    fetchReviews(...Array(4), user).then((reviews) => {
      console.log(reviews);
      setUserReviews(reviews);
      setIsLoading(false);
    });
  }, [user]);

  return isLoading ? (
    <p>Loading reviews...</p>
  ) : (
    <div className="user-reviews-container">
      {userReviews.map((review) => (
        <UserReviewCard userReview={review} />
      ))}
    </div>
  );
};

export default UserReviews;
