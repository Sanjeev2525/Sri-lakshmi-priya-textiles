import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer";
import Slider from "./Components/Slider"
import LatestRelease from "./Components/LatestRelease";
import Feature from "./Components/Feature";
import aboutimage from "./images/about.png"
import aboutimage2 from "./images/about2.png"
function Home(){

    return(
        <>
            <Navigation/>
            <Slider/>
            <LatestRelease image={aboutimage} title='Exclusive mats' button='shop' desc='click below to view at exciting prices' link='/products/mat'/>
            <LatestRelease image={aboutimage2} title='Chennimalai powerloomed weaving' button='shop' desc='view our collections below' link='/products/pillow'/>
            <Feature/>
            <Footer/>
            
        </>

    );
}
export default Home;



