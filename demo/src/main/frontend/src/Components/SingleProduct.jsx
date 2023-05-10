import React, { Suspense } from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";
// import ProductCards from "./ProductCards";
import Loader from "./Loader";

const ProductCards = React.lazy(() => import("./ProductCards"));
export default function SingleProduct(){

    return(
    <>
    <Navigation/>
    <Suspense fallback={<Loader/>}> 
    <ProductCards/>
    </Suspense>
    <Footer/>
    </>);
    
}