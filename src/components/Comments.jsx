import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../api";
import CommentCard from "./CommentCard";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);
  return isLoading ? (
    <p>Loading comments...</p>
  ) : (
    <>
      {comments.length ? (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      ) : (
        <p>No comments yet...</p>
      )}
    </>
  );
};

export default Comments;
