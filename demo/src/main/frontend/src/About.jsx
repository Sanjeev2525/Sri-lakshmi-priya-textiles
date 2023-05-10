import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer";
import './AboutUs.css';
import Iframe from 'react-iframe';
const About = ()=>{

   
    return (
        <div>
            <Navigation/>
            <>
            <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to our textile showroom! We are dedicated to providing high-quality textiles
        and exceptional customer service. With a wide range of fabrics, patterns, and designs,
        we aim to meet all your textile needs. Our experienced team is passionate about textiles
        and is here to assist you in finding the perfect fabric for your projects. Visit our showroom
        today and experience the finest collection of textiles.
      </p>
      <div className="animated-component">
       
          
            <h3>Discover Our Collection</h3>
         
      </div>

    </div>
            </>
            <div style={{ width: '100%' }}>
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.2764677473397!2d77.60202487423302!3d11.16715408900634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba975f02f543421%3A0x1afbac86a8ac2ebc!2sSri%20Lakshmi%20Priya%20Textiles!5e0!3m2!1sen!2sin!4v1683648099618!5m2!1sen!2sin"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
            <Footer/>
        </div>

    );
}

export default About;