import './Login.css'
import { useState } from "react";
import { loginUsers } from "../../data/loginUsers.js";
//import { LoginContext } from "./Context.jsx";
const Login = () => {
    const  [isLoggedIn , setIsLoggedIn] = useState(false); 
    const [username, setUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    const matchUser = {
        name : username,
        password :userPassword,
       }
   const handleLogin = async () =>{
  
    let toLogin = await loginUsers(matchUser)

    if(!toLogin.LoggedIn){
        setIsLoggedIn(false)
        console.log('wrong password or username ', matchUser, toLogin);
        return 
    }else{
        setIsLoggedIn(true)
        console.log('you are logged in',toLogin.LoggedIn);
    }
    
   
   
    
   }
   

   const handleLogOut = () =>{
     setIsLoggedIn(false);
   }

   /*const handlwGetData = async ()  =>{

    fetch('/secret' , {
        headers: {
            "Authorization": "Bearer: " + tokenjwt
        }
    })
   } */

    return(
        <div>
            {isLoggedIn?
             (<div>
               <h2>Log Out</h2>
               <button onClick={handleLogOut}>Log out</button> 
            </div>) 
            : 
            <div>  
                <form onSubmit={handleSubmit}>

                    <div className="form-div admin-div">
                        <h3>Admin</h3>
                        
                    </div>

                    <div className="form-div">
                        <label htmlFor="username">username</label>
                        <input id="username"  type="text"  value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="current-username"    />
                    </div>

                    <div className="form-div">
                        <label htmlFor="password">password</label>
                        <input id="password" type="password" value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        autoComplete="current-password"  />
                    </div>

                    <div className='btn-login form-div'>
                        <button type="button" className="btn" onClick={handleLogin} >Click</button>
                    </div>
                    </form>
                </div>
                }
           
        </div>
    )
}

export default Login