import * as usersDao from "./users-dao.js"

const UserController = (app) => {
  app.get('/api/users', findUsers);
  app.get('/api/users/:uid', findUserById);
  app.get('/api/users/name/:name', findUserByUsername);
  app.post('/api/users', createUser);
  app.delete('/api/users/:uid', deleteUser);
  app.put('/api/users/:uid', updateUser);
  app.put('/api/users/follow/:uid/:fid', follow);
  app.put('/api/users/unfollow/:uid/:fid', unfollow);

}

const follow = async (req, res) => {
    try {
        await usersDao.follow(req.params.uid, req.params.fid);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const unfollow = async (req, res) => {
    try {
        await usersDao.unfollow(req.params.uid, req.params.fid);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const findUsers = async (req, res) => {
  const users = await usersDao.findUsers()
  res.json(users)
}

const findUserById = async (req, res) => {
  const user = await usersDao.findUserbyId(req.params.uid)
  res.json(user)
}
const findUserByUsername = async (req, res) => {
  const user = await usersDao.findUserByUsername(req.params.uid)
  res.json(user)
}

const createUser = async (req, res) => {
  const newUser = req.body;
  newUser.followers = 0;
  newUser.following = 0;
  newUser.profilePicture = "https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg";
  const user = await usersDao.findUserByUsername(newUser.username)
  if (user) {
    res.sendStatus(409)
    return
  }
  const insertedUser = await usersDao
    .createUsers(newUser);
  res.json(insertedUser);
}

const deleteUser = async (req, res) => {
  const userIdToDelete = req.params.uid;
  const status = await usersDao.deleteUsers(userIdToDelete);
  res.json(status);
}

const updateUser = async (req, res) => {
  const userIdToUpdate = req.params.uid;
  const updates = req.body;
  const status = await usersDao
    .updateUsers(userIdToUpdate,
      updates);
  res.json(status);
}


export default UserController