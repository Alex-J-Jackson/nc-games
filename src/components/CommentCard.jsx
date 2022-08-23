const CommentCard = ({ comment }) => {
  const { body, author, created_at } = comment;
  const date = new Date(created_at);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="comments">
      <p>
        <span className="comment-author">{author}</span>{" "}
        <span className="comment-date">
          {months[date.getMonth()]} {date.getFullYear()}
        </span>
        <br />
        <span className="comment-body">{body}</span>
      </p>
    </div>
  );
};

export default CommentCard;
