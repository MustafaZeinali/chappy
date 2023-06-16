import express from 'express';
import { isValidId , isValidUser} from '../database/validation.js';
import { getDb } from '../database/database.js';
import jwt from 'jsonwebtoken';
import {secret} from '../../server.js'
import { router } from './group.js';

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
    const user = db.data.users;
    const username = req.body.name;
    const password = req.body.password;

    const userfound = user.find((user) => user.name === username && user.password === password);
    //console.log(userfound);
    if (!userfound){
        res.status(401).send({message: "invalid password or username"});
        return
    }else{
        

           const tokenPackage = getToken(userfound);
           res.status(200).send(tokenPackage);
    }
    user.push(tokenPackage)
    await db.write()


    }
    
)

function getToken (userfound){
   
    if (!userfound) {
        console.log("userfound is undefined in getToken");
        return;
      }
    
      const hour = 60 * 60;
      const options = { expiresIn: 2 * hour };
      const payload = { userId: userfound.id };
      let token = jwt.sign(payload, secret, options);
      console.log("signed jwt", token);
      let tokenPackage = { token: token };
      console.log("du är inloggad", tokenPackage);
    
      return tokenPackage;
    
} 



       

// get secret

userRouter.get('/secret' , async (req , res) => {
    await db.read()
    const user = db.data.users;
    let authorHeader = req.headers.authorization
    //console.log('secret 1: ' , authorHeader);
    if(!authorHeader){
        res.status(401).send({
            message: 'You are not authorized, sorry!'
        })
        return
    }
    let tokenJwt = authorHeader.replace('Bearer: ' , '')

    try {
        let decode = jwt.verify(tokenJwt , secret)
        console.log('GET/secret decoded', decode)
        let userIds = decode.userId
        let maybeUserId = Number(userIds)
        let foundUserById = user.find(x => x.id === maybeUserId);
        //let findAdmin = foundUserById(u => u. === maybeUserId)
        console.log(`user "${foundUserById.name}" has acces to secret data`);
        res.send({
            message: 'this is the secret data, Because you are authenticated'
        })
    } catch (error) {
        console.log('GET/secret failed' + error.message);
        res.sendStatus(401)
    }
    
    //if()


    
})

export  {userRouter};
export default getToken;