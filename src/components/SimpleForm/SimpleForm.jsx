import React from 'react';

const SimpleForm = () => {
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
    }
    return (
        <div>
            <form action="" onSubmit={handleForm}>
                <input type="text" name='name' />
                <br />
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
};

export default SimpleForm;