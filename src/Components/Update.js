import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import style from "./ProductForm.module.css"
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    
    useEffect(() => {
        console.log(id)
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log("UE", res.data)
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div className={style.editor}>
            <h1>Update {title}</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="Title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="Price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="Description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;