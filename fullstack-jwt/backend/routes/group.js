import express from 'express';
import { getDb } from '../database/database.js';


const router = express.Router();

const db = getDb();



//GET group 

router.get('/', async (req, res) => {
    await db.read();
    const group = db.data.group1;
    res.status(200).send(group);
   
});

router.post('/', async (req, res) => {
    await db.read();
    let messages = req.body.message
    let newMessage ={
        message: messages
    }
    db.data.group1.push(newMessage);
    await db.write();
    res.status(200).send(newMessage);
})

export {router};