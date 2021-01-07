import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
const Form = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        if (email) {
            Axios.post('http://localhost:3002/insertSub', { email: email })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            setEmail('');
        } else {
            console.log('Cant send an empty email input');
        }
    }
  
            return (
                <>
                    <div id="form" >
                        <input type="email" name="email" placeholder="EMAIL ADDRESS" className="email-input" onChange={(e) => setEmail(e.target.value)} autoComplete="off" value={ email }/><br />
                        <button type="button" name="subscribe" className="btn" onClick={handleSubmit} >  SUBSCRIBE</button>
                    </div>
                    <div className="red-div"></div>
                </>
        
            );
        }
 
export default Form;