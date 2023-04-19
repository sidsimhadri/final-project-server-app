import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import HelloController from "./controllers/hello-controller.js";
import UserController from './controllers/users/users-controller.js';
import ReviewController from './controllers/reviews/reviews-controller.js';
import TagController from './controllers/tags/tags-controller.js';
import SpotifyController from './controllers/spotify/spotify-controller.js';
import session from 'express-session';
import mongoose from "mongoose";
dotenv.config()
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
//     || 'mongodb://127.0.0.1:27017/trackstar'
 const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/trackstar'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
}))
app.use(cors())
app.use(express.json());
ReviewController(app);
TagController(app);
HelloController(app);
UserController(app);
SpotifyController(app);
app.listen(process.env.PORT || 4000);