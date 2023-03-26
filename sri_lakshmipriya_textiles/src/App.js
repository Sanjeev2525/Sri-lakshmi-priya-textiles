import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Navigation/Navigation';
import Home from "./Home";
import Collections from "./Collections";
import About from "./About";
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
function App(){
    const [products, setProducts] = useState();
    const [product, setProduct] = useState();
    const getProducts = async () =>{
        try
        {
            const response = await api.get("/api/v1/products");
            console.log(response.data);
            setProducts(response.data);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    const getProductData = async (product) => {

        try
        {
            const response = await api.get(`/api/v1/products/${product}`);

            const singleProduct = response.data;

            setProduct(singleProduct);



        }
        catch (error)
        {
            console.error(error);
        }

    }

    useEffect(() => {
        getProducts();
    },[])


    return(
        <Routes>
            <Route path="/" element={<Home products={products}/>} />
            <Route path="/collections" element={<Collections/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>

    );
}

export default App;