import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import connectDb from './lib/db.js';
import router from './router/person.router.js';
import cors from 'cors';

dotenv.config()
const app = express()
connectDb()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/User',router)
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

