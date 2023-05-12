import React from "react";
import Loader from "./Components/Loader";
import {Route, Routes} from "react-router-dom";
// import './Components/Navigation/Navigation';
import { Suspense } from 'react';
// import Home from "./Home";
// import Collections from "./Collections";
// import About from "./About";
// import SingleProduct from "./Components/SingleProduct";
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
// import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App(){
    const [products, setProducts] = useState([]);
   
    const getProducts = async () =>{
        try
        {
            const response = await api.get("/api/v1/products");
            setProducts(response.data);
        }
        catch(err){console.log(err);}}
    
    useEffect(() => {
        getProducts();
    },[])

    const Home = React.lazy(()=>import("./Home"))
    const Login = React.lazy(()=>import("./Components/Login"))
    const SingleProduct = React.lazy(()=>import("./Components/SingleProduct"))
    const Collections = React.lazy(()=>import("./Collections"))
    const About = React.lazy(()=>import("./About"))

    return(
        <Suspense fallback={<Loader/>}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Collections products={products}/>}/>
                <Route path="/products/:productT" element={<SingleProduct/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<div style={{ backgroundImage: "url('https://wallpaperaccess.com/full/16692.jpg')" }}><Login/></div>}/>
		    <Route path="/admin" element={<Dashboard/>} />
        </Routes>
        </Suspense>
    );
}

export default App;


