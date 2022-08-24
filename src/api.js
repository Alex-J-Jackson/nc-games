const axios = require("axios").default;

export const fetchReviews = (category = "") => {
  return axios
    .get(
      `https://be-project-nc-games.herokuapp.com/api/reviews?category=${category}`
    )
    .then(({ data: { reviews } }) => {
      return reviews;
    });
};

export const fetchReviewById = (review_id) => {
  return axios
    .get(`https://be-project-nc-games.herokuapp.com/api/reviews/${review_id}`)
    .then(({ data: { review } }) => {
      return review;
    });
};

export const fetchCategories = () => {
  return axios
    .get("https://be-project-nc-games.herokuapp.com/api/categories")
    .then(({ data: { categories } }) => {
      return categories;
    });
};

export const updateVotes = (review_id, vote) => {
  return axios
    .patch(
      `https://be-project-nc-games.herokuapp.com/api/reviews/${review_id}`,
      {
        inc_votes: vote,
      }
    )
    .then(({ data: { review } }) => {
      return review;
    });
};

export const fetchCommentsByReviewId = (review_id) => {
  return axios
    .get(
      `https://be-project-nc-games.herokuapp.com/api/reviews/${review_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (review_id, comment) => {
  return axios.post(
    `https://be-project-nc-games.herokuapp.com/api/reviews/${review_id}/comments`,
    comment
  );
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://be-project-nc-games.herokuapp.com/api/comments/${comment_id}`
  );
};
