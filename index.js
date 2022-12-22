import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes/post.js';
//initialize express
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

//connect to mongodb
const MONGO_URL='mongodb+srv://eddiemuhoro:eddiemuhoro@cluster0.yifhg.mongodb.net/share-memories?'
mongoose.connect(MONGO_URL , ({ useNewUrlParser: true, useUnifiedTopology: true }))
.then(()=> { console.log('database connected')})
.catch((error)=> console.log(error.message));

app.use('/', router);

app.listen(port, ()=> console.log(`Server running on : http://localhost:${port}`))