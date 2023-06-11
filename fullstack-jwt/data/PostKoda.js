import { API_URL } from "./constant";


function koda (message){
    
    const options = {
        method: 'POST', 
        header : {'Content-Type': 'application/json'},
        body: JSON.stringify(message)

    }

    const response = await fetch(API_URL +'koda/')
     
}

