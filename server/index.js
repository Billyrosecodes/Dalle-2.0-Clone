import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config(); //access ENV from .env file

//middlewares
const app = express(); // initialize app
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!');
})

//run server, can fail so use async
const startServer = async () => {
     
    try {
        connectDB(process.env.MONGODB_URL); //connect using ENV
        app.listen(8080, () => console.log(`Server has started on port http://localhost:8080`));
    } catch (error) {
        console.log(error);
    }
     
}

startServer(); //initiate server starting