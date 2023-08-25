import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import bodyParse from "body-parser"
import userRouter from './routers/users.router';
import checkupsRouter from './routers/checkups.router';


const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParse.json())

mongoose.connect('mongodb://127.0.0.1:27017/VirtualWebVisit')
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('db connection ok')
})

const router = express.Router();
router.use('/user', userRouter)
router.use('/checkup', checkupsRouter)

app.use('/', router)

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));