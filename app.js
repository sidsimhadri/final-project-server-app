import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from './controllers/users/users-controller.js';
import ReviewController from './controllers/reviews/reviews-controller.js';
import TagController from './controllers/tags/tags-controller.js';
import SpotifyController from './controllers/spotify/spotify-controller.js';
import session from 'express-session';
import mongoose from "mongoose";
import AuthController from "./controllers/users/auth-controller.js";
mongoose.connect('mongodb://127.0.0.1:27017/trackstar');
const app = express()
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}))
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.use(express.json());
AuthController(app);
ReviewController(app);
TagController(app);
HelloController(app);
UserController(app);
SpotifyController(app);
app.listen(process.env.PORT || 4000);