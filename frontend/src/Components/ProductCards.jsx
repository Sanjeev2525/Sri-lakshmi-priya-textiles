// import api from "../api/axiosConfig";
// import { useParams } from "react-router-dom";
// import {useState,useEffect} from "react";
// import {
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBRipple,
//     MDBBtn,
//   } from "mdb-react-ui-kit";
// import "./Product.css";
// import Loader from "./Loader";
// import { Link } from 'react-router-dom';
// import GridListView from "./GridListView";


// export default function ProductCards(){
  
//   const {productT}=useParams();
//   const [product, setProduct] = useState([]);
//   const [loading,setLoading] = useState(false);

//     useEffect(() => {
//       const getProduct = async (productT) => {

//         try
//         {
//             const response = await api.get(`/api/v1/products/${productT}`);
//             const singleProduct = response.data;
//             setProduct(singleProduct);
//             console.log(product);
//             setLoading(true);
//         }
//         catch (error)
//         {
//             console.error(error);
//         }};
//         getProduct(productT);
//         // eslint-disable-next-line
//     },[productT])

    
    
//     const ProductCard = product.map(({name,price,photos})=>
//     <div key={product.id}>
      
//     </div>
//         );
//         return(
//           <>
//           {loading ? ProductCard : <Loader />}
//         </>);
//       } 