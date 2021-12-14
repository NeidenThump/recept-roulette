import {Link} from "react-router-dom";
import generate from './generateRecipe.js';
import backgroundTitle from './bilder/backgroundTitle.png';
import background from './bilder/background.png';

function Startsida() {
    const recept = JSON.parse(window.localStorage.getItem('recept'));
    const finns = (recept == null);
    finns ? generate("livs") : console.log("Array finns");

    return(
        <div className="startsida">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"/>
            <img className="img" src={backgroundTitle} alt="Title startsida"/>

            <div className="startsidaBottom">
                <img className="img2" src={background} alt=""/>
                <p className="startsidaText"><b>Tusentals </b>ingredienser,<br/><b>Miljontals </b>kombinationer!</p>
                <Link to="/recept-roulette/Recept/"><button>Let’s go!</button></Link>
            </div>
            {/* <div className="white"/> */}
        </div>
    );
}

export default Startsida;