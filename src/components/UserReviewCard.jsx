import { Image } from "react-bootstrap";

const UserReviewCard = ({ userReview }) => {
  const { title, category, created_at, review_img_url } = userReview;
  return (
    <div className="user-review">
      <span className="user-review-image">
        <Image fluid thumbnail src={review_img_url} />
      </span>
      <span className="user-review-title">{title}</span>
      <span className="user-review-category">{category}</span>
      <span className="user-review-date">{created_at}</span>
      <hr />
      <hr />
    </div>
  );
};

export default UserReviewCard;
