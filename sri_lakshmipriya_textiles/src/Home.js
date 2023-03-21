import { MDBCarousel, MDBCarouselItem, } from 'mdb-react-ui-kit';
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer";

function Home(){

    return(
        <>
            <div><Navigation/></div>
            <MDBCarousel showControls showIndicators dark fade>
            <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'
            alt='...'
            >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg'
            alt='...'
            >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselItem>

            <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src='https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg'
            alt='...'
            >
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </MDBCarouselItem>
            </MDBCarousel>
                <div><Footer/></div>
        </>

    );
}
export default Home;



