import {Link} from "react-router-dom"
import Login from "./Login";
const Header = () => {

    return (  
    <div>
        <header>
            <h1> Chappy </h1>
            <div class="user-status">
   
            <button> Logga in </button>

            <Login/>
         
	        </div>
        </header>
    </div>)
} 

export default Header;