export const fetchReviews = () => {
  return fetch("https://be-project-nc-games.herokuapp.com/api/reviews")
    .then((res) => {
      return res.json();
    })
    .then(({ reviews }) => {
      return reviews;
    });
};
