import reviewsModel from './reviews-model.js';
export const findReviews = () => reviewsModel.find();
export const findReviewsbyId = (rid) => reviewsModel.findById({_id: rid});
export const createReviews = (review) => reviewsModel.create(review);
export const deleteReviews = (rid) => reviewsModel.deleteOne({_id: rid});
export const updateReviews = (rid, review) => reviewsModel.updateOne({_id: rid}, {$set: review})