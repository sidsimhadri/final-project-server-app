import reviewssss from './reviews.js'
let reviews = reviewssss

const ReviewController = (app) => {
    app.get('/api/reviews', findReviews);
    app.get('/api/reviews/:rid', findReviewById);
    app.post('/api/reviews', createReview);
    app.delete('/api/reviews/:rid', deleteReview);
   app.put('/api/reviews/:rid', updateReview);
}

const findReviews = (req, res) => {
  const albumId = req.query.albumId
  const userId = req.query.userId
  if(albumId) {
    const reviewsByAlbumId = reviews
      .filter(r => r.albumId === albumId)
    res.json(reviewsByAlbumId)
    return
  }
  if(userId) {
    const reviewsByUserId = reviews
      .filter(r => r.userId === userId)
    res.json(reviewsByUserId)
    return
  }
  res.json(reviews)
}

const findReviewById = (req, res) => {
  const reviewId = req.params.rid;
  const review = reviews
    .find(r => r._id === reviewId);
  res.json(review);
}

const createReview = (req, res) => {
  const newReview = req.body;
  newReview._id = (new Date()).getTime() + '';
  reviews.push(newReview);
  res.json(newReview);
}

const deleteReview = (req, res) => {
  const reviewId = req.params['rid'];
  reviews = reviews.filter(rvw =>
    rvw._id !== reviewId);
  res.sendStatus(200);
}

const updateReview = (req, res) => {
 const reviewId = req.params['rid'];
 const updates = req.body;
 reviews = reviews.map((rvw) =>
   rvw._id === reviewId ?
     {...rvw, ...updates} :
     rvw
 );
 res.sendStatus(200);
}


export default ReviewController