

const StartPage = () => {
    //const navigate =  useNavigate()  
     return (  
    <div>
        

         <main className='main'>       
            <nav>
                <ul>
                    <li> [Kanaler] </li>
                    <li><a href="#"> #koda </a></li>
                    <li><a href="#"> #random </a> <span className="unread">3</span> </li>
                    <li className="locked"><a href="#"> #grupp1 🔒 </a></li>
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
        
    </div>)
}

export default StartPage