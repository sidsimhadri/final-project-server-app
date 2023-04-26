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

export const follow = async (uid, fid) => {
    await usersModel.updateOne({ _id: uid }, { $push: { following: fid } });
    await usersModel.updateOne({ _id: fid }, { $push: { followers: uid } });
}

export const unfollow = async (uid, fid) => {
    await usersModel.updateOne({ _id: uid }, { $pull: { following: fid } });
    await usersModel.updateOne({ _id: fid }, { $pull: { followers: uid } });
}
