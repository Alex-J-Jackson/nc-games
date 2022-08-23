const CommentCard = ({ comment }) => {
  const { body, author, votes, created_at } = comment;
  return (
    <div className="comments">
      <p>
        {body} -{" "}
        <em>
          {author}, {created_at.slice(0, -14)}
        </em>
        {/* <br />
        Votes: {votes} */}
      </p>
    </div>
  );
};

export default CommentCard;
