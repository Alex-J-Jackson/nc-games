import { useContext, useEffect, useState } from "react";
import { deleteComment, fetchCommentsByReviewId } from "../api";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { UserContext } from "../contexts/User";

const Comments = ({ review_id }) => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState();
  const [posted, setPosted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = (comment_id) => {
    deleteComment(comment_id);
    setPosted(false);
  };
  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id, comments]);
  return isLoading ? (
    <p>Loading comments...</p>
  ) : (
    <>
      {comments.length ? (
        comments.map((comment) => (
          <>
            <CommentCard key={comment.comment_id} comment={comment} />
            {comment.author === user && (
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => {
                  handleClick(comment.comment_id);
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            )}
          </>
        ))
      ) : (
        <p>No comments yet...</p>
      )}
      <CommentForm
        review_id={review_id}
        posted={posted}
        setPosted={setPosted}
      />
    </>
  );
};

export default Comments;
