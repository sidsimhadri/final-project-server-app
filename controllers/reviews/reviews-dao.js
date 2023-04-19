import reviewsModel from './reviews-model.js';
export const findReviews = () => reviewsModel.find();
export const findReviewsbyId = (rid) => reviewsModel.findById({ _id: rid });
export const findReviewsbyBody = (searchQuery) => {
    reviewsModel.find({ body: searchQuery })
}
export const createReviews = (review) => reviewsModel.create(review);
export const deleteReviews = (rid) => reviewsModel.deleteOne({_id: rid});
export const updateReviews = (rid, review) => reviewsModel.updateOne({ _id: rid }, { $set: review })
export const addTag = (rid, review, tid) =>
{
    newReview = {
        ...review,
        tags: review.tags.push(tid)
    }
    reviewsModel.updateOne({ _id: rid }, { $set: newReview })
}
export const removeTag = (rid, review, tid) =>
{
    newTags = review.tags.filter( tag => tag != tid)

    newReview = {
        ...review,
        tags: newTags
    }
    reviewsModel.updateOne({ _id: rid }, { $set: newReview })
}