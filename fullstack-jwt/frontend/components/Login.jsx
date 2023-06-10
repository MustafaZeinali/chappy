
import { useState } from "react";
import { loginUsers } from "../../data/loginUsers.js";

const Login = () => {
    const  [isloggedIn , setIsLoggedIn] = useState(false); 
    const [username, setUsername] = useState("");
    const [userPassword, setuserPassword] = useState("");
    //const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefaolt()
    }

   const handleLogin = async () =>{
    console.log('sís logged in' , isloggedIn);
    let loginStatus = await loginUsers({name :username , password: userPassword})
    console.log(loginStatus); 
    setIsLoggedIn(true)
   }

   const handleLogOut = () =>{
     setIsLoggedIn(false);
   }

   const handlwGetData = async ()  =>{

    fetch('/secret' , {
        headers: {
            "Authorization": "Bearer: " + tokenjwt
        }
    })
   } 

    return(
        <div>
            {isloggedIn?
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
                        onChange={e => setUsername(e.target.value)}
                            />
                    </div>

                    <div className="form-div">
                        <label htmlFor="password">password</label>
                        <input id="password" type="password" value={userPassword}
                        onChange={e => setuserPassword(e.target.value)}
                            />
                    </div>

                    <div>
                        <button type="button" className="btn" onClick={handleLogin} >Click</button>
                    </div>
                    </form>
                </div>
                }
           
        </div>
    )
}

export default Login