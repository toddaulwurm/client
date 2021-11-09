import React,{useState} from "react";
import axios from "axios";
import style from "./ProductForm.module.css"

export default ()=>{
    const [title,setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');


    const handleTitle=e=>{
        setTitle(e.target.value)
        if(e.target.value.length>2){
            setTitleError('')
        }
        else{
            setTitleError('Title is too short!')
        }
    }
    const handlePrice=e=>{
        setPrice(e.target.value)
        if(e.target.value>0){
            setPriceError('')
        }
        else{
            setPriceError('Price needs to be positive!')
        }
    }
    const handleDescription=e=>{
        setDescription(e.target.value)
        if(e.target.value.length>2){
            setDescriptionError('')
        }
        else{
            setDescriptionError('Description is too short!')
        }
    }

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
                        <h1>Add a Product here!</h1>
            <label>Title:</label>
            <input type='text' onChange={(e)=>{handleTitle(e)}} value={title}/><br/>
            <p>{titleError}</p>
            <label>Price:</label>
            <input type='text' onChange={(e)=>{handlePrice(e)}} value={price}/><br/>
            <p>{priceError}</p>
            <label>Description:</label>
            <input type='text' onChange={(e)=>{handleDescription(e)}} value={description}/><br/>
            <p>{descriptionError}</p>
            <input type='submit' value='Add Product'/>
        </form>   
    )
}