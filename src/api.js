export const fetchReviews = (category = "") => {
  return fetch(
    `https://be-project-nc-games.herokuapp.com/api/reviews?category=${category}`
  )
    .then((res) => {
      return res.json();
    })
    .then(({ reviews }) => {
      return reviews;
    });
};

export const fetchReviewById = (review_id) => {
  return fetch(
    `https://be-project-nc-games.herokuapp.com/api/reviews/${review_id}`
  )
    .then((res) => {
      return res.json();
    })
    .then(({ review }) => {
      return review;
    });
};

export const fetchCategories = () => {
  return fetch("https://be-project-nc-games.herokuapp.com/api/categories")
    .then((res) => {
      return res.json();
    })
    .then(({ categories }) => {
      return categories;
    });
};

export const updateVotes = (review_id, vote) => {
  return fetch(
    `https://be-project-nc-games.herokuapp.com/api/reviews/${review_id}`,
    {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ inc_votes: vote }),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then(({ review }) => {
      return review;
    });
};

export const fetchCommentsByReviewId = (review_id) => {
  return fetch(
    `https://be-project-nc-games.herokuapp.com/api/reviews/${review_id}/comments`
  )
    .then((res) => {
      return res.json();
    })
    .then(({ comments }) => {
      return comments;
    });
};
