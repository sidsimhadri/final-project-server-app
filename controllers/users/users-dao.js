import usersModel from './users-model.js';
export const findUsers = () => usersModel.find();
export const findUserbyId = (uid) => usersModel.findById({ _id: uid });
export const findUserByUsername = (username) =>
    usersModel.findOne({ username });
export const findUserByCredentials = (username, password) =>
    usersModel.findOne({ username, password });
export const createUsers = (user) => usersModel.create(user);
export const deleteUsers = (uid) => usersModel.deleteOne({ _id: uid });
export const updateUsers = (uid, user) => usersModel.updateOne({ _id: uid }, { $set: user })