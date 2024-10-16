import express from 'express';
import { PORT , mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors';

const app = express();
//middleware
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("welcome to the mernal world");
});

app.use('/books', booksRoutes);

mongoose
.connect(mongoDBURL).then(()=> {
 console.log("Connected");
 app.listen(PORT, () =>{
    console.log(`listening on port: ${PORT}`);

});
})
.catch((error)=>{
console.log(error);
});

