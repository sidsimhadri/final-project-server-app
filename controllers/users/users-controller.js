import * as usersDao from "./users-dao.js"

const UserController = (app) => {
    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
   app.put('/api/users/:uid', updateUser);
}

const findUsers = async (req, res) => {
  const users = await usersDao.findUsers()
  res.json(users)
}

const findUserById = async (req, res) => {
  const user = await usersDao.findUserById(req.params.uid)
  res.json(user)
}

const createUser = async (req, res) => {
  const newUser = req.body;
  newUser.followers = 0;
  newUser.following = 0;
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