import usersModel from './users-model.js';
export const findUsers = () => usersModel.find();
export const findUserbyId = (uid) => usersModel.findById({_id: uid});
export const createUsers = (user) => usersModel.create(user);
export const deleteUsers = (uid) => usersModel.deleteOne({_id: uid});
export const updateUsers = (uid, user) => usersModel.updateOne({ _id: uid }, { $set: user })

export const addFollowing = (uid, user, fid) =>
{
    newUser = {
        ...user,
        following: user.following.push(fid)
    }
    usersModel.updateOne({ _id: uid }, { $set: newUser })
}
export const deleteFollowing = (uid, user, fid) =>
{
    newFollowing = review.tags.filter( follow => follow != fid)

    newUser = {
        ...user,
        following: newFollowing
    }
    usersModel.updateOne({ _id: uid }, { $set: newUser })
}

export const addFollower = (uid, user, fid) =>
{
    newUser = {
        ...user,
        followers: user.followers.push(fid)
    }
    usersModel.updateOne({ _id: uid }, { $set: newUser })
}
export const deleteFollower = (uid, user, fid) =>
{
    newFollowers = review.tags.filter( follow => follow != fid)

    newUser = {
        ...user,
        followers: newFollowers
    }
    usersModel.updateOne({ _id: uid }, { $set: newUser })
}