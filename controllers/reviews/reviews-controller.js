import * as reviewsDao from "./reviews-dao.js";

const ReviewController = (app) => {
    app.get('/api/reviews', findReviews);
  app.get('/api/reviews/:rid', findReviewById);
      app.get('/api/reviews/:body', findReviewsByBody);
    app.post('/api/reviews', createReview);
    app.delete('/api/reviews/:rid', deleteReview);
    app.put('/api/reviews/:rid', updateReview);
    app.put('/api/reviews/:rid/:tid', addTag);
    app.put('/api/reviews/:rid/:tid', removeTag);
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
const findReviewsByBody = async (req, res) => {
  const reviews = await reviewsDao.findReviewsbyBody(req.params.body)
  res.json(reviews)
}

const findReviewById = async (req, res) => {
  const reviews = await reviewsDao.findReviewsbyId(req.params.rid)
  res.json(reviews)
}


const createReview = async (req, res) => {
  const newReview = req.body;
  newReview.timestamp = new Date();
  newReview.upvotes = 0;
  newReview.downvotes = 0;
  const insertedReview = await reviewsDao.createReviews(newReview);
  res.json(insertedReview);
}

const deleteReview =  async (req, res) => {
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