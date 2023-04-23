import * as reviewsDao from "./reviews-dao.js";

const ReviewController = (app) => {
  app.get('/api/reviews', findReviews);
  app.get('/api/reviews/:rid', findReviewById);
  app.get('/api/reviews/body/:body', findReviewByBody);
  app.post('/api/reviews', createReview);
  app.delete('/api/reviews/:rid', deleteReview);
  app.put('/api/reviews/:rid', updateReview);
  app.put('/api/reviews/:rid/:tid', addTag);
  app.put('/api/reviews/:rid/:tid', removeTag);
  app.get('/api/reviews/album/:aid', findReviewsByAlbumId);
  app.get('/api/reviews/curator', findCuratorReviews)
  app.get('/api/reviews/user/:uid', findReviewsByUserId)
}

const findCuratorReviews = async (req, res) => {
  const reviews = await reviewsDao.findCuratorReviews;
  res.json(reviews)
}

const findReviewsByUserId = async (req, res) => {
  const reviews = await reviewsDao.findReviewsByUserId(req.params.uid)
  res.json(reviews)
}

const addTag = async (req, res) => {
  const reviewIdToUpdate = req.params.rid;
  const taggIdToAdd = req.params.tid;
  const updates = req.body;
  const status = await reviewsDao
    .addTag(reviewIdToUpdate, updates, taggIdToAdd);
  res.json(status);
}

const removeTag = async (req, res) => {
  const reviewIdToUpdate = req.params.rid;
  const tagIdToRemove = req.params.tid;
  const updates = req.body;
  const status = await reviewsDao
    .removeTag(reviewIdToUpdate, updates, tagIdToRemove);
  res.json(status);
}

const findReviews = async (req, res) => {
  const reviews = await reviewsDao.findReviews()
  res.json(reviews)
}
const findReviewsByAlbumId = async (req, res) => {
  const reviews = await reviewsDao.findReviewsbyAlbumId(req.params.aid)
  res.json(reviews)
}

const findReviewById = async (req, res) => {
  const reviews = await reviewsDao.findReviewsbyId(req.params.rid)
  res.json(reviews)
}

const findReviewByBody = async (req, res) => {
  console.log(req.params.body)
  const reviews = await reviewsDao.findReviewsbyBody(req.params.body)
  res.json(reviews)
}

const createReview = async (req, res) => {
  const newReview = {
    body: req.body.body,
    timestamp: new Date(),
    upvotes: 0,
    downvotes: 0,
    upvotesArr: [],
    downvotesArr: [],
    albumId: req.body.albumId,
    userId: req.body.userId,
    rating: req.body.rating,
    tags: req.body.tags
  }

  const insertedReview = await reviewsDao.createReviews(newReview);
  res.json(insertedReview);
}

const deleteReview = async (req, res) => {
  const reviewIdToDelete = req.params.rid;
  const status = await reviewsDao.deleteReviews(reviewIdToDelete);
  res.json(status);
}

const updateReview = async (req, res) => {
  const reviewIdToUpdate = req.params.rid;
  const updates = req.body;
  const status = await reviewsDao
    .updateReviews(reviewIdToUpdate, updates);
  res.json(status);
}

export default ReviewController