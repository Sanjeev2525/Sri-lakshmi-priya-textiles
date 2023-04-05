import React from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";
import api from "../api/axiosConfig";
import '../App.css';
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
export default function SingleProduct(){
    const {productT}=useParams();
    const [product, setProduct] = useState([]);
    console.log(productT);
    const getProduct = async (productT) => {

        try
        {
            const response = await api.get(`/api/v1/products/${productT}`);
            const singleProduct = response.data;
            setProduct(singleProduct);
        }
        catch (error)
        {
            console.error(error);
        }
        console.log(product);
    }
    useEffect(() => {
        getProduct(productT);
    },[])
    
    const ProductCard = product.map(({id,name,price}) =>
    <div className="card" key={id.timestamp}>
        <div className="card_img">
            <img src='https://img.freepik.com/free-psd/elegant-bedroom-hotel-room-with-classic-furniture_176382-189.jpg?w=1060&t=st=1679589994~exp=1679590594~hmac=22446dea7afdd7fce72ff29509bcbe8fdc2673b07022df55829f1a77ee16817e' />
        </div>
        <div className="card_header">
            <h2>{name}</h2>
            <p className="price">{price}</p>
            <div className="btn">Add to cart</div>
        </div>
    </div>);
    // const ProductCard = product.map(({name})=>{
    //     return (<h1>{name}</h1>);
    // });
    return(
    <>
    <Navigation/>
    <>{ProductCard}</>
    <Footer/>
    </>);
    
}