import { getUser } from '../controllers/user_ctrl.js';
import express from 'express';
const userRouter = express.Router()
userRouter.get('/getUser',getUser)
export default userRouter
