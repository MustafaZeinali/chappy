import express from 'express';
import { getDb } from '../data/database.js';


const router = express.Router();

const db = getDb();



//GET group 

router.get('/', async (req, res) => {
    await db.read();
    res.status(200).send(db.data.group1);
   
});


export {router};