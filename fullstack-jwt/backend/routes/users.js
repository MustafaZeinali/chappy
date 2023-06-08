import express from 'express';
import { isValidId , isValidUser} from '../database/validation.js';
import { getDb } from '../database/database.js';

const userRouter = express.Router();

const db = getDb();


userRouter.get('/', async (req, res) => {
    await db.read()
    const user = db.data.users;
    res.status(200).send(user)
})

userRouter.post('/', async (req, res) => {
    await db.read()
    const user = db.data.users;
    const username = req.body.name;
    const password = req.body.password;

    function generateId() {
        return Math.floor(Math.random() * 10000)
    }

    const newUser = {
        id: generateId(),
        username,
        password
    };
    console.log( 'newUser is added' , newUser);
    console.log('test1');
    if(isValidUser(newUser)) {
        console.log('test2');
        res.status(400).send('det måste vara sträng inte nummer');
        return
    }else{
        user.push(newUser);
        await db.write();
        res.status(201).send(newUser );
        return;
    }
});


// for login user
userRouter.post("/login", async (req, res) => {
    await db.read()
    const user = db.data.users
    const username = req.body.name;
    const password = req.body.password;

    const userfound = user.find((user => user.name === username && user.password === password));
    console.log(userfound);
    if (!userfound){
        res.status(401).send({message: "invalid credentials"});
    }else{
        res.status(200).send('inloggad');
    }
})

export  {userRouter};