import mongoose from 'mongoose';
const schema = mongoose.Schema({
  name: String
}, {collection: 'tags'});
export default schema;