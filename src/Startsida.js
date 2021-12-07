import {Link} from "react-router-dom";
import generate from './generateRecipe.js';

function Startsida() {
    const title = window.localStorage.getItem('title');
    const ingr = JSON.parse(window.localStorage.getItem('ingredients'));
    const time = window.localStorage.getItem('time');
    const port = window.localStorage.getItem('port');
    const finns = ((title == null) && (ingr == null) && (time == null) && (port == null));
    finns ? generate("livs") : console.log("Array finns");

    return(
        <div className="startsida">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"/>
            <div>
                <h1 className="startsidaTitle">Recept Roulette</h1>
            </div>
            <div className="startsidaBottom">
                <p className="startsidaText">Redo för ett <span className="green">recept</span><br/>ingen annan har sett?</p>
                <p className="startsidaTextGrey">Över 1000 ingredienser!</p>
                <Link to="/recept-roulette/Recept/"><button>Let’s go!</button></Link>
            </div>
        </div>
    );
}

export default Startsida;