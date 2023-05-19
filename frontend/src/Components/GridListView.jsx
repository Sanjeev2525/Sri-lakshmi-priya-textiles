import { Button, Row } from "antd";
// import {UnorderedListOutlined,AppstoreOutlined} from "@ant-design/icons"
import GridCard from "./GridCard";
import { ConfigProvider } from 'antd';

import api from "../api/axiosConfig";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import "./Product.css";
import Loader from "./Loader";
// import { Link } from 'react-router-dom';
import { MDBContainer,MDBCard,MDBRipple } from "mdb-react-ui-kit";
import { Typography } from 'antd';
const { Title } = Typography;

export default function  GridListView(){
    const {productT}=useParams();
  const [product, setProduct] = useState([]);
  const [loading,setLoading] = useState(false);

    useEffect(() => {
      const getProduct = async (productT) => {

        try
        {
            const response = await api.get(`/api/v1/products/${productT}`);
            const singleProduct = response.data;
            setProduct(singleProduct);
            // console.log(singleProduct);
            setLoading(true);
        }
        catch (error)
        {
            console.error(error);
        }};
        getProduct(productT);
        // eslint-disable-next-line
    },[productT])

    console.log(product);
    const ProductCard =  <Row gutter={[20, 30]}>
    {product.map(({ product,name, price, photos,size}) => (
        <div key={product.id}>
                <MDBContainer fluid>
                <MDBCard className="shadow-0 border rounded-3 mt-3 mb-1">
                <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >

      <GridCard key={name} name={name} price={price} photos={photos} size={size} />
      <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <Button type="primary" color="green-1" href={`/products/${product}/${name}`}>Order now</Button>
  </ConfigProvider>
  </MDBRipple>
  </MDBCard>
  </MDBContainer>
      </div> 
    ))}
  </Row>;
        return(
          <>
          <div style={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh', // Optional, adjust based on your needs
      }}><Title>{productT.toUpperCase()}</Title></div>
          {loading ? ProductCard : <Loader />}
        </>);
      }; 

    