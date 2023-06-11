import Header from '../frontend/components/Header'
import Login from '../frontend/components/Login.jsx';
import './App.css'



const App = () =>{
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
	<div className="chat-area">
		<section className="heading">
			Chattar i <span className="chat-name"> #grupp2 </span>
		</section>
	<section className="history">
		
		<section className="align-right">
			<p> VänligaVera: hejsan </p>
			<p> 17:46 </p>
		</section>
		
		<section>
			<p> MunterMoa: tjena! </p>
			<p> 17:47 </p>
		</section>
		
	</section>
	<section>
		<input type="text" placeholder="Ditt meddelande..." />
		<button> Skicka </button>
	</section>
	</div>
</main>
        </div>
    )
}


export default App