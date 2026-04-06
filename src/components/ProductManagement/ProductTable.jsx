import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h2>Products:{products.length}</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=><tr>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price * product.quantity}</td>
                    </tr>)
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default ProductTable;