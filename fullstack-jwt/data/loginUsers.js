
import {API_URL} from './constant.js'

async function loginUsers(user){
    console.log('user is loging ...');

    const option = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify(user)

    }
    const response = await fetch (API_URL + 'users/' + 'login', option)
    const statusObject = await response.json()
    console.log('response from Api: ' , statusObject );
    return statusObject
}