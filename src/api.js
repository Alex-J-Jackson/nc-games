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
