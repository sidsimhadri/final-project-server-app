import mongoose from 'mongoose';
const schema = mongoose.Schema({
  body: String,
  upvotes: Number,
  downvotes: Number,
  timestamp: Date,
  albumid: Number,
  userid: Number,
  tags: [String]
}, {collection: 'reviews'});
export default schema;