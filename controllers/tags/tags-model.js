import mongoose from 'mongoose';
import tagsSchema from './tags-schema.js'
const tagsModel = mongoose
              .model('TagsModel', tagsSchema);
export default tagsModel;