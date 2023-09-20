import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"
import bodyParse from "body-parser"
import userRouter from './routers/users.router'
import checkupsRouter from './routers/checkups.router'
import reportsRouter from './routers/reports.router'
import checkUpTypesRouter from './routers/checkuptype.router'
import departmentRouter from './routers/departments.router'


const app = express()
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParse.json({limit: '50mb'}));
app.use(bodyParse.urlencoded({limit: '50mb', extended: true}));


mongoose.connect('mongodb://127.0.0.1:27017/VirtualWebVisit')
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('db connection ok')
})

const router = express.Router()
router.use('/user', userRouter)
router.use('/checkup', checkupsRouter)
router.use('/report', reportsRouter)
router.use('/checkuptype', checkUpTypesRouter)
router.use('/department', departmentRouter)


app.use('/', router)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(4000, () => console.log(`Express server running on port 4000`))