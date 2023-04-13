import mongoose from 'mongoose';
const schema = mongoose.Schema({
  username: String,
  role: String,
  followers: Array,
  followers: Array
}, {collection: 'users'});
export default schema;