import { Link } from 'react-router-dom';
import '../../style/Koda.css';


const Header = () => {
    return(
        <div> 
        <header>
          <h1> Chappy </h1>
        <div className="user-status">
        <Link to= '/login'> <button> Logga in </button> </Link>
        
        { /*  <span>Inloggad som VänligaVera</span>
            <button> Logga ut </button>
            <input type="text" value="VänligaVera" />
            <input type="password" value="1234" />
    När man inte är inloggad visas detta i stället:*/}
        
        </div>
        </header>
        <div>
        

        <main className='main'>       
           <nav>
               <ul>
                   <li> [Kanaler] </li>
                   <Link to= '/koda'> <li><a href="#"> #koda </a></li></Link>
                   <li><a href="#"> #random </a> <span className="unread">3</span> </li>
                   <Link to='/group1'> <li className="locked"><a href="#"> #grupp1 🔒 </a></li></Link>
                   <li className="selected"><a href="#"> #grupp2 🔑 </a></li>
                   <li className="locked"><a href="#"> #grupp3 🔒 </a></li>
                   
                   <li title="Direktmeddelanden"> [DM] </li>
                   <li><a href="#">PratgladPelle</a></li>
                   <li><a href="#">SocialaSara</a></li>
                   <li><a href="#">TrevligaTommy</a></li>
                   <li><a href="#">VänligaVera</a></li>
                   <li><a href="#">GladaGustav</a></li>
               </ul>
           </nav>
       
   </main>   
       
   </div>
   </div>
    )
}

export default Header