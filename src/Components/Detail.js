import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import style from "./ProductForm.module.css"
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div className={style.single}>
            <h1>Title: {product.title}</h1>
            <p><strong>Price: ${product.price}</strong></p>
            <p>Description: {product.description}</p>
        </div>
    )
}
    
export default Detail;