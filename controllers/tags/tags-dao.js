import tagsModel from './tags-model.js';
export const findTags = () => tagsModel.find();
export const findTagsById = (tid) => tagsModel.findById({_id: tid});
export const createTags = (tag) => tagsModel.create(tag);
export const deleteTags = (tid) => tagsModel.deleteOne({_id: tid});
export const updateTags = (tid, tag) => tagsModel.updateOne({ _id: tid }, { $set: tag })
export const findTagsByName = (name) => tagsModel.find({name: name});