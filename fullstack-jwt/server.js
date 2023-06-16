import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {router} from './backend/routes/group.js';
import {userRouter } from './backend/routes/users.js';


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
    //console.log(req.headers.authorization)
    next();
})


/*app.get('/', (req, res) => {
    res.send()
});*/

//chanal
app.use('/api/group', router)

//users
app.use('/api/users',userRouter)
// fixa den authenticateJwt//

//start server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


export {secret}