import express from 'express';
import  {config}  from 'dotenv';
import classRouter from './controllers/classes.js';
import studentRouter from './controllers/students.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import { ErrorHandler } from './middleware/errorHandler.js';

const app = express()
const processEnv = config().parsed

app.use(cors())
app.use(ErrorHandler)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect("/classes")
})

app.use('/classes', classRouter)
app.use('/students', studentRouter)

app.listen(processEnv.PORT)