import { useState } from 'react';
import '../../src/index.css';
import { text } from 'express';

const Group1 = () => {
    // vi kan lägga en variable när den blir lnloggad lås blir olåst
    const [message , setMessage] = useState("")
    const [send , setSend] = useState([])


    const handleMessage = (e) =>{
        setMessage(e.target.value)
    }

    const sendMessage = () =>{
        setSend(text => [...text, message ])
    }

   const deleteBtn = () => {
    
   }

    return ( 
        <div> 
          <div> 
      <main className='main'>       
       
        <div className="chat-area">
           <section className="heading">
                Chattar i <span className="chat-name"> #Gruop1 </span>
            </section>
        <section className="history">
            
           
            
        <section>
                {send.map((text) => (
                    <p key={text}><button onClick={deleteBtn} >❌</button> {text}  <span>{new Date().toLocaleDateString()}</span> </p>
                ))} 
                
        </section>
            
        </section>
        <section>
            <input type="text" placeholder="Ditt meddelande..." value={message}
            onChange={handleMessage}/>
            <button onClick={sendMessage}> Skicka </button>
        </section>
        </div>
    </main>   
</div>
</div>
)
}

export default Group1