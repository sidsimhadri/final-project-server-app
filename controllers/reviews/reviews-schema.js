import mongoose from 'mongoose';
const schema = mongoose.Schema({
  body: String,
  upvotes: Number,
  downvotes: Number,
  timestamps: Number,
  albumid: Number,
  userid: Number
}, {collection: 'reviews'});
export default schema;