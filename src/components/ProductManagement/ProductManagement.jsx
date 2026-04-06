import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const stateHandler=(NewProduct)=>{
        const newProducts=[...products,NewProduct];
        setProducts(newProducts);
    }
    return (
        <div>
            <ProductForm stateHandler={stateHandler}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;