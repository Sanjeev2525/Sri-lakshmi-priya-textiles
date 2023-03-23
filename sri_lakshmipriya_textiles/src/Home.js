import { MDBCarousel, MDBCarouselItem, } from 'mdb-react-ui-kit';
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer";



function Home(){

    return(
        <>
            <MDBCarousel showControls showIndicators dark fade>
            <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            img src='https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkc2hlZXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
            alt='...'
            >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src='https://plus.unsplash.com/premium_photo-1664443944871-40510cee240f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkc2hlZXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
            alt='...'
            >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselItem>

            <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src='https://images.unsplash.com/photo-1631008790544-16bcb9ee05b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHNoZWV0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
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



