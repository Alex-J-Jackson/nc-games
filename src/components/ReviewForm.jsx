import { TextField } from "@mui/material";

const ReviewForm = () => {
  return (
    <div className="review-form-container">
      <div className="review-form">
        <TextField className="title" label="Standard" variant="standard" />
        <TextField className="category" label="Standard" variant="standard" />
        <TextField className="designer" label="Standard" variant="standard" />
        <TextField
          className="review-body"
          multiline
          minRows={20}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default ReviewForm;
