import React,{useState} from "react";
import axios from "axios";
import style from "./ProductForm.module.css"

export default ()=>{
    const [title,setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',{
            title,price,description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    return(
        <form onSubmit={onSubmitHandler} className={style.flexer}>
            <label>Title:</label>
            <input type='text' onChange={(e)=>{setTitle(e.target.value)}} value={title}/><br/>
            <label>Price:</label>
            <input type='text' onChange={(e)=>{setPrice(e.target.value)}} value={price}/><br/>
            <label>Description:</label>
            <input type='text' onChange={(e)=>{setDescription(e.target.value)}} value={description}/><br/>
            <input type='submit' value='Add Product'/>
        </form>   
    )
}