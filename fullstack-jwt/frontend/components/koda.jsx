import '../../style/Koda.css';

const Koda = () => {
    // vi kan lägga en variable när den blir lnloggad lås blir olåst

    return ( 
        <div> 
      <main className='main'>       
       
        <div className="chat-area">
           <section className="heading">
                Chattar i <span className="chat-name"> #Koda </span>
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

export default Koda