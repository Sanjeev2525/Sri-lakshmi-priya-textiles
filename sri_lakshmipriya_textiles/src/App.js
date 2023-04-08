import {Route, Routes} from "react-router-dom";
import './Components/Navigation/Navigation';
import Home from "./Home";
import Collections from "./Collections";
import About from "./About";
import SingleProduct from "./Components/SingleProduct";
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Login from "./Components/Login";
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
        catch(err)
        {
            console.log(err);
        }
    }
    
    useEffect(() => {
        getProducts();
    },[])


    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Collections products={products}/>}/>
            <Route path="/products/:productT" element={<SingleProduct/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
		    <Route path="/admin" element={<Dashboard/>} />
        </Routes>
    );
}

export default App;