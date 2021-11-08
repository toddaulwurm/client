import React from 'react'
import style from "./ProductForm.module.css"
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>{
                let url=`/api/product/${product._id}`;
                return (<p className={style.items} key={i}><h2><a href={url}>{product.title}</a></h2> ${product.price}<br/> {product.description}<hr></hr></p>)
            }
            )}
        </div>
    )
}
    
export default ProductList;