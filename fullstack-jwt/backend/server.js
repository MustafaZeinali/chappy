import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import {router} from './routes/group.js';
import {userRouter} from './routes/users.js';

//konfiguren server
const app = express();
dotenv.config();
const port = process.env.PORT || 1368;
const secret = process.env.SECRET || 'clan-uchiha'  


//middleware

app.use(cors());
app.use(express.json());
app.use((req, res , next) => {
    console.log(`${req.method} ${req.url}` , req.body)
    next();
})


/*app.get('/', (req, res) => {
    res.send()
});*/

//canal
app.use('/api/group1', router)

//users
app.use('/api/users', userRouter)


//start server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})