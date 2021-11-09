import React from 'react'
import style from "./ProductForm.module.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {props.products.map( (product, i) =>{
                let url=`/products/${product._id}`;
                return (
                <div className={style.items} key={i}>
                    <h2><a href={url}>{product.title}</a></h2> ${product.price}<br/> {product.description}<hr></hr>                    
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </div>)
            }
            )}
        </div>
    )
}
    
export default ProductList;