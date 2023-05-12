import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature2.jpg"
import featureimage2 from "../images/feature3.png"
import featureimage3 from "../images/feature4.png"
function Feature(){
    return(
        <div id="features">
            <div className="a-container">
                <FeatureBox image={featureimage} title='Modern Powerloom'/>
                <FeatureBox image={featureimage2} title='High Quality fabric'/>
                <FeatureBox image={featureimage3} title='Different Varieties'/>

            </div>

        </div>
    )
}

export default Feature;
