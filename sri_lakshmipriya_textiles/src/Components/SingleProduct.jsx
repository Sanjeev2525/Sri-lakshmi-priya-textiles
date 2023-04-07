import React from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";
import api from "../api/axiosConfig";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    MDBBtn,
  } from "mdb-react-ui-kit";
import "./Product.css";


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
    <>
    <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="12">
          <MDBCard className="shadow-0 border rounded-3 mt-3 mb-1">
            <MDBCardBody>
              <MDBRow >
                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6">
                  <h5>{name}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                    <span>50</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </MDBCol>
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">₹ {price}</h4>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
        );
    
    return(
    <>
    <Navigation/>
    <>{ProductCard}</>
    <Footer/>
    </>);
    
}