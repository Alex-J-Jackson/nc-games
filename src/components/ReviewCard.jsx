import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { updateVotes } from "../api";

const ReviewCard = ({ review, clicked }) => {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [userVote, setUserVote] = useState(0);

  const {
    review_id,
    title,
    category,
    designer,
    owner,
    review_body,
    review_img_url,
    created_at,
    votes,
    comment_count,
  } = review;
  const handleClick = (review_id) => {
    updateVotes(review_id).then((review) => {
      console.log(review);
    });
    setUserVote(1);
    setThumbsUp((currentThumbsUp) => {
      return !currentThumbsUp;
    });
  };
  return (
    <article>
      <h3>{title}</h3>
      <p>
        owned by <strong>{owner}</strong>
        <br />
        review posted on {created_at}
        <br />
        game-type: {category}
        <br />
        designed by {designer}
      </p>
      <img src={review_img_url} />
      <main className="review-text">{review_body}</main>
      <Link
        className={clicked ? "hidden" : "comments-link"}
        to={`/reviews/${review_id}`}
      >
        View review and comments
      </Link>
      <button
        onClick={() => {
          handleClick(review_id);
        }}
        className="vote-btn"
      >
        {thumbsUp ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
        {votes + userVote}
      </button>
      <hr className="solid" />
    </article>
  );
};

export default ReviewCard;
