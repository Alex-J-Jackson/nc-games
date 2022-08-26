import { Image } from "react-bootstrap";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteReview } from "../api";
import { useState } from "react";

const UserReviewCard = ({ userReview }) => {
  const { review_id, title, category, created_at, review_img_url } = userReview;
  const [deletion, setDeletion] = useState(false);
  const handleDeletion = (review_id) => {
    setDeletion(true);
    deleteReview(review_id);
  };
  return (
    <div className={deletion ? "user-review--deleted" : "user-review"}>
      <span className="user-review-image">
        <Image fluid thumbnail src={review_img_url} />
      </span>
      <p>
        <span className="user-review-title">{title}</span>
        <br />
        <span className="user-review-category">{category}</span>
        <br />
        <span className="user-review-date">{created_at}</span>
      </p>
      {deletion ? (
        <Button
          disabled
          className="delete-user-review-btn"
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      ) : (
        <Button
          className="delete-user-review-btn"
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => {
            handleDeletion(review_id);
          }}
        >
          Delete
        </Button>
      )}
    </div>
  );
};

export default UserReviewCard;
