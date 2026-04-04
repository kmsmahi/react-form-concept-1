import React from 'react';
import useInputField from '../../hooks/hooks';

const HooksForm = () => {
    const [name,setName]=useInputField('');
    const [email,setEmail]=useInputField('');
    const [password,setPassword]=useInputField('');
    const btnHandler=(e)=>{
        e.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
    }
    return (
        <div>
            <form action="" onSubmit={btnHandler}>
                <label htmlFor="name">Name:</label>
                <br />
                <input name="name" type="text" defaultValue={name}  onChange={setName}/>
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input type="email" name="" id="" defaultValue={email}  onChange={setEmail}/>
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" name="" id="" defaultValue={password}  onChange={setPassword}/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HooksForm;