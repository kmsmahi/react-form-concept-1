import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('');
    const[error,setError]=useState('');
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log("Password from state:", password);
        console.log(e.target.email.value);
        if(password.length>0 && password.length<6){
        setError('Password must be at least 6 characters long');
    } else {
        setError('');
    }
    }
    
    const handlePassChange=(e)=>{
        console.log("Password Changed:", e.target.value);
        setPassword(e.target.value);
    }
    

    return (
        <div>
            <form action="" onSubmit={handleForm}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" name="name" id="name" required />
                <br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" name="password" id="password" required onChange={handlePassChange} value={password} />
                <br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" name="email" id="email" required />
                <br />
                <button type="submit">Submit</button>
               
            </form>
            {error && <p style={{color:'red'}}>{error}</p>}
            
        </div>
    );
};

export default ControlledField;




