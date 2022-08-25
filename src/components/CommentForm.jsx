import { TextField, Button } from "@mui/material";
import { PostAdd } from "@mui/icons-material";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../api";

const CommentForm = ({ review_id, posted, setPosted }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState({ username: user });
  const [label, setLabel] = useState("Leave comment...");

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    !comment.body || comment.body.length < 20
      ? setLabel("Comments must be at least 20 characters.")
      : postComment(review_id, comment).then(() => {
          setComment({ username: user });
        }) && setPosted(true);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {posted ? (
        <TextField fullWidth disabled label="You posted a comment" />
      ) : (
        <TextField
          fullWidth
          multiline
          label={label}
          id="body"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      )}
      {posted ? (
        <Button disabled variant="contained" endIcon={<PostAdd />}>
          Post
        </Button>
      ) : (
        <Button type="submit" variant="contained" endIcon={<PostAdd />}>
          Post
        </Button>
      )}
    </form>
  );
};

export default CommentForm;
