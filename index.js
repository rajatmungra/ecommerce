import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import Defaultdata from './Defaultdata.js';
import router from './routes/routes.js';
import dotenv from 'dotenv'

import stripe from "./routes/stripe.js"

dotenv.config();




const app = express();

app.use(bodyParser.json({limit:'30mb' , extended  : true}));

app.use(bodyParser.urlencoded({limit:'30mb' , extended  : true}));
app.use(cors());
app.use('/',router);
app.use('/',stripe);

const MongoURL = process.env.MONGO_URL;
const PORT = 5000;

mongoose.connect(MongoURL, {
    useNewUrlParser : true ,
    useUnifiedTopology : true,
})
.then(()=> app.listen(process.env.PORT||5000),console.log("Server is Running"))
.catch((error)=> console.log(error.message));

// Defaultdata();