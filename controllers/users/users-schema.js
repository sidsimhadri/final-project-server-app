import mongoose from 'mongoose';
const schema = mongoose.Schema({
  username: String,
  role: String,
  followers: [String],
  following: [String]
}, {collection: 'users'});
export default schema;