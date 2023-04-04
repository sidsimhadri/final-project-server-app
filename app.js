import express from 'express'
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js";
import UserController from './controllers/users/users-controller.js';
import ReviewController from './controllers/reviews/reviews-controller.js';
import TagController from './controllers/tags/tags-controller.js';
const app = express()
app.use(cors())
app.use(express.json());
ReviewController(app);
TagController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);