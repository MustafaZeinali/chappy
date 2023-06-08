
import { useState } from "react";
import { loginUsers } from "../../data/loginUsers.js";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefaolt()
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <div className="form-div admin-div">
                    <h3>Admin</h3>
                    
                </div>

                <div className="form-div">
                    <label htmlFor="username">username</label>
                    <input id="username"  type="text"  value={username}/>
                </div>

                <div className="form-div">
                    <label htmlFor="">password</label>
                    <input type="password" />
                </div>
            </form>
        </div>
    )
}