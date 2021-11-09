import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductList from './ProductList';
import ProductForm from './ProductForm'

export default () => {
    const [products, setProducts]=useState([]);
    const [loaded, setLoaded]=useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[products]);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    
    return (
        <div>
            <ProductForm/>
            <hr/>
            <h2>Current Inventory:</h2>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}