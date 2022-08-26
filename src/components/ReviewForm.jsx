import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { fetchCategories, postReview } from "../api";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ReviewForm = () => {
  const { user } = useContext(UserContext);
  const [newReview, setNewReview] = useState({ owner: user });
  const [posted, setPosted] = useState(false);
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);
  const handleTextChange = (e) => {
    setNewReview((currentReview) => {
      return { ...currentReview, [e.target.id]: e.target.value };
    });
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setNewReview((currentReview) => {
      return { ...currentReview, category: e.target.value };
    });
  };
  const handleSubmit = (e, newReview) => {
    e.preventDefault();
    setPosted(true);
    postReview(newReview);
  };
  return posted ? (
    <h2>Review posted!</h2>
  ) : (
    <div className="review-form-container">
      <h2>Post a review</h2>
      <form
        className="review-form"
        onSubmit={(e) => {
          handleSubmit(e, newReview);
        }}
      >
        <span className="title">
          <TextField
            required
            label="Title"
            id="title"
            variant="standard"
            onChange={(e) => handleTextChange(e)}
          />
          <br />
          <br />
        </span>
        <span className="category">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 205 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Category
            </InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="category"
              value={selectedCategory}
              onChange={(e) => {
                handleCategoryChange(e);
              }}
              label="Category"
            >
              {isLoading ? (
                <MenuItem>Loading categories...</MenuItem>
              ) : (
                categories.map(({ slug }) => (
                  <MenuItem key={slug} value={slug}>
                    {slug}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
          <br />
          <br />
        </span>
        <span className="designer">
          <TextField
            required
            label="Designer"
            id="designer"
            variant="standard"
            onChange={(e) => handleTextChange(e)}
          />
          <br />
          <br />
        </span>
        {/* <span className="img-url">
          <TextField
            label="Image URL"
            id="review_img_url"
            variant="standard"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
        </span> */}
        <TextField
          required
          className="review-body"
          multiline
          minRows={20}
          id="review_body"
          label="Review"
          variant="outlined"
          onChange={(e) => handleTextChange(e)}
        />
        <Button
          className="review-submit-btn"
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Post
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
