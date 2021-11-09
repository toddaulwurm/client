import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,Link,BrowserRouter } from "react-router-dom";
import style from "./ProductForm.module.css"
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const { removeFromDom } = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)

            })
            .catch(err => console.error(err));
    }
    
    return (
        <div className={style.single}>
            <h1>Title: {product.title}</h1>
            <p><strong>Price: ${product.price}</strong></p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
            <p>----</p>
            <Link to={"/products/"}>
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                    Delete
                </button>
            </Link>
        </div>
    )
}
    
export default Detail;