import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState();
  const [posted, setPosted] = useState(false);
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
          <div key={comment.comment_id} className="comment-plus-icon">
            <CommentCard
              comment={comment}
              review_id={review_id}
              setComments={setComments}
              setPosted={setPosted}
            />
          </div>
        ))
      ) : (
        <p>No comments yet...</p>
      )}
      <CommentForm
        review_id={review_id}
        posted={posted}
        setPosted={setPosted}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
};

export default Comments;
