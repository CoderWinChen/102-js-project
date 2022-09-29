import express from 'express'; //ES6写法
import userRouter from './router/user_router.js';
const app = express()
app.use(userRouter)
app.listen(80,()=>{
    console.log('server running at http://localhost');
})
