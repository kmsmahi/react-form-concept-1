import React, { useState } from 'react';

const ProductForm = ({stateHandler}) => {
    const[error,setError]=useState([]);
    const btnHandler=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name, price, quantity);
        const newProduct={
            name,
            price,
            quantity
        };
        if(name.length===0){
            setError('Product name is required');
            return;
        }
        else if(price.length===0){
            setError('Product price is required');
            return;
        }
        else if(quantity.length===0){
            setError('Product quantity is required');
            return;
        }
        else{
            setError('');
        }

        stateHandler(newProduct);
    }
    return (
        <div>
            <form action="" onSubmit={btnHandler}>
                <label htmlFor="name">Product Name:</label>
                <br />
                <input type="text" name='name' placeholder='Product name'/>
                <br />
                <label htmlFor="price">Product Price:</label>
                <br />
                <input type="text" name='price' placeholder='Product price'/>
                <br />
                <label htmlFor="quantity">Product Quantity:</label>
                <br />
                <input type="text" name='quantity' placeholder='Product quantity'/>
                <br />
                <input type="submit" value="Add Product" />
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
};

export default ProductForm;