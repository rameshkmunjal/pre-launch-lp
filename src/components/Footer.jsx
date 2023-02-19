import {useState, useRef} from 'react';

const Footer=()=>{
    const inputElement = useRef();
    const [email, setEmail]=useState("");    

    function handleSubmit(e){
        console.log("handle submit called");
        e.preventDefault();
        console.log(email);
        if(email.includes('@')===false){
            inputElement.current.style.border="2px solid red";
        } else {
            inputElement.current.style.border="none";
        }
    }
    return(
        <footer className="footer">
            <h3>Get Notified when we launch</h3>
            <div className="footer-button-div">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        ref={inputElement} 
                        placeholder="email address" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                    />
                    <button type="submit" className="notify-btn">Notify Me</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer;