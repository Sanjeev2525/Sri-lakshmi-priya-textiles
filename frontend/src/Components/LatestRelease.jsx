import './LatestRelease.css';
import { Link } from 'react-router-dom';

function LatestRelease(props){

    return(
        <div id="about">
            <div className="about-image">
                <img src ={props.image} alt=""/>
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <Link to={props.link}>
                <button>{props.button}</button>
                </Link>
       
            </div>
           

        </div>

    );
}
export default LatestRelease;



