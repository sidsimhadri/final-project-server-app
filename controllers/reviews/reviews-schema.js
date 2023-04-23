import mongoose from 'mongoose';
const schema = mongoose.Schema({
  body: String,
  upvotes: Number,
  upvotesArr: [String],
  downvotesArr: [String],
  downvotes: Number,
  timestamp: Date,
  albumId: String,
  userId: String,
      curator: { type: Boolean, default: false },
  tags: [String],
  rating: Number,
}, {collection: 'reviews'});
export default schema;