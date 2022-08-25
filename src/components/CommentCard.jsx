import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../api";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CommentCard = ({ comment, setPosted }) => {
  const [deletion, setDeletion] = useState(false);
  const { body, author, created_at } = comment;
  const { user } = useContext(UserContext);
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
  const handleDeletion = (comment_id) => {
    deleteComment(comment_id).then(() => {
      setDeletion(false);
    });
    setPosted(false);
  };
  return (
    <div className="review-comment">
      <p>
        <span className="comment-author">{author}</span>{" "}
        <span className="comment-date">
          {months[date.getMonth()]} {date.getFullYear()}
        </span>
        <br />
        {deletion ? (
          <span>Deleting comment...</span>
        ) : (
          <span className="comment-body">{body}</span>
        )}
        {!deletion && author === user && (
          <IconButton
            className="del-comment-btn"
            aria-label="delete"
            size="small"
            onClick={() => {
              setDeletion(true);
              handleDeletion(comment.comment_id);
            }}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        )}
      </p>
    </div>
  );
};

export default CommentCard;
