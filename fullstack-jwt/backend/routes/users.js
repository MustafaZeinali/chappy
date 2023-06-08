import express from 'express';

import { getDb } from '../data/database.js';

const userRouter = express.Router();

const db = getDb();


userRouter.get('/', async (req, res) => {
    await db.read()
    const user = db.data.users;
    res.status(200).send(user)
})

export  {userRouter};