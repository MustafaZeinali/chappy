import express from 'express';
import { getDb } from '../database/database.js';
import { isValidGroup, isValidId } from '../database/validation.js';
import getToken from './users.js'

const router = express.Router();

const db = getDb();



//GET group 

router.get('/', async (req, res) => {
    //todo authuzitication , kontrollera headers och token
    await db.read();
    let authorHeader = req.headers.authorization
    //const token = authorHeader.split(' ')[1]
    let token = authorHeader
    const isValidToken = token === getToken();
    //let limitBearer = !authorHeader.startsWith('Bearer ' )
    /*let tokenjwt = token.find(tokenForUser => tokenForUser !== getToken)*/
    if( !authorHeader ||!isValidToken) {
        res.status(404).send('Invalid')
        return
    }else{
        const group = db.data.group1;
        res.status(200).send(group);
        return
    }
    
    
    
});

router.post('/', async (req, res) => {
    await db.read();
    let messages = req.body.message
    function generateId() {
        return Math.floor(Math.random() * 10000)
    }
    let newMessage ={
        id: generateId(), 
        message: messages
    }
    db.data.group1.push(newMessage);
    await db.write();
    res.status(200).send(newMessage);
})

router.put('/:id', async (req, res) => {
    let id = Number(req.params.id)

    if(!isValidId(id)){
        res.status(400).send('det ska vara nummer inte stränge')
        console.log('kolla på Id');
    }

    if(!isValidGroup(req.body)){
        res.status(400).send('Invalid group');
        return
    }
    

   let newMessage = req.body
   await db.read();

    let oldMessage = db.data.group1.find(text => text.id ===id)
    if(oldMessage===-1){
        res.status(400).send('det finns inte sån text')
        console.log('fel med Id');
    }

    let findMessage = db.data.group1.find(text => text.id===id)

    findMessage.message = newMessage.message

    db.data.group1[oldMessage] = newMessage
    await db.write();
    res.sendStatus(200)
    console.log('message is changed');
});

export {router};