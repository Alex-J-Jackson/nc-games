import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const {
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
      <Link to="/comments/:comment_id">Comments</Link>
      <button className="vote-btn">Vote</button>
      <hr className="solid" />
    </article>
  );
};

export default ReviewCard;
