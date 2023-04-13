import tagsModel from './tags-model.js';
export const findTags = () => tagsModel.find();
export const createTags = (tag) => tagsModel.create(tag);
export const deleteTags = (tid) => tagsModel.deleteOne({_id: tid});
export const updateTags = (tid, tag) => tagsModel.updateOne({_id: tid}, {$set: tag})