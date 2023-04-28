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
    MDBRipple,
    MDBBtn,
  } from "mdb-react-ui-kit";
import "./Product.css";
import Loader from "./Loader";


export default function ProductCards(){
  
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
    },[productT])

    
    const ProductCard = product.map(({name,price,photos})=>
    <div key={product.id}>
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
                      src={photos}
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
                  {/* <div className="d-flex flex-row">
                    <span>50</span>
                  </div> */}
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
                    Discription
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
                  <h6 className="text-success">Available</h6>
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn>
                    {/* <MDBBtn outline color="primary" size="sm" className="mt-2">
                      Add to wish list
                    </MDBBtn> */}
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
        );
        return(
          <>
          {loading ? ProductCard : <Loader />}
        </>);
      } 