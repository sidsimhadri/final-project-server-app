import mongoose from 'mongoose';
const schema = mongoose.Schema({
  body: String,
  upvotes: Number,
  downvotes: Number,
  timestamp: Date,
  albumid: String,
  userid: String,
  tags: [String],
  rating: Number,
}, {collection: 'reviews'});
export default schema;