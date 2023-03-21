import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Navigation/Navigation';
import Home from "./Home";
import Collections from "./Collections";
import About from "./About";

function App(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/collections" element={<Collections/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>

    );
}

export default App;