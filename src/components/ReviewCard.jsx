import { Link } from "react-router-dom";
import { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { updateVotes } from "../api";
import { Image } from "react-bootstrap";

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
    updateVotes(review_id, userVote === 0 ? 1 : -1).catch(() => {
      alert("Whoops, something went wrong.");
    });
    setThumbsUp((currentThumbsUp) => {
      return !currentThumbsUp;
    });
    setUserVote(userVote === 0 ? 1 : 0);
  };
  return (
    <article>
      <h1 className="review-heading">{title}</h1>
      <p className="review-info">
        <strong>{owner}</strong>
        <br />
        {new Date(created_at).toLocaleString()}
        <br />
        {category} game
        <br />
        designed by {designer}
      </p>
      <Image
        thumbnail
        fluid
        className="review-img"
        src={review_img_url}
        alt={title}
      />
      <main className="review-text">{review_body}</main>
      <Link
        className={clicked ? "hidden" : "comments-link"}
        to={`/reviews/${review_id}`}
      >
        See review and comments ({comment_count})
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
