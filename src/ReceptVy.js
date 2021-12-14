import { Typography, Button, Stack ,Chip, ListItem } from "@mui/material";
import { Favorite, FavoriteBorder, KeyboardArrowDownRounded, Refresh } from '@mui/icons-material';
import { useState, useEffect} from 'react';
import generate from './generateRecipe.js';
import PullToRefresh from 'pulltorefreshjs';
import { textAlign } from "@mui/system";
import ord_mallar from './databaser/mallar.json';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';

// Get random number between min max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function ReceptVy(){
    const DB_TYPE = window.localStorage.getItem("getFromDB").toString();
    const storedRecipe = JSON.parse(window.localStorage.getItem('recept'));
    const [recept, setRecept] = useState(storedRecipe == null ? generate(DB_TYPE) : storedRecipe);

    const savedOnce = window.localStorage.getItem('savedOnce');
    const [harSparat, setHarSparat] = useState(savedOnce == 1 ? true : false);
    console.log(savedOnce);
    const save = (e) =>{
        setHarSparat(true);
        window.localStorage.setItem('savedOnce',1);
        saveToStorage();
    }

    function saveToStorage() {
        //const recept = window.localStorage.getItem("recept")
        let receptlist = JSON.parse(window.localStorage.getItem("favoriter"))
        receptlist = Array.isArray(receptlist) ? receptlist : []
        receptlist.push(recept)
        //Write out the result in web storage
        window.localStorage.setItem("favoriter", JSON.stringify(receptlist));
    }

    const undo = (e) =>{
        setHarSparat(false);
        window.localStorage.setItem('savedOnce',0);
        removeFromStorage();
    }

    function removeFromStorage() {
        //const recept = window.localStorage.getItem("recept")
        let receptlist = JSON.parse(window.localStorage.getItem("favoriter"))
        receptlist.pop();

        //Write out the result in web storage
        window.localStorage.setItem("favoriter", JSON.stringify(receptlist));
    }

    useEffect(()=>{
        // Pull to refresh function does not refresh generate?
        PullToRefresh.init({
            mainElement: '#recipe',
            instructionsPullToRefresh: "Drag ner för ett nytt recept",
            instructionsReleaseToRefresh: "Släpp för ett nytt recept",
            instructionsRefreshing: "Genererar recept",
            onRefresh() {
                let newRecipe = generate(DB_TYPE);
                setRecept(newRecipe);
                setHarSparat(false);
                window.localStorage.setItem('savedOnce',false);
            }
        });

        return () =>{
            // Don't forget to destroy all instances on unmout
            // or you will get some glitches.
            PullToRefresh.destroyAll();
        };
    });

    
    /*
    Från 4- 6 ingredienser ska det skapas:
    - En slumpad titel med några av de orden
    - Slumpade portioner mellan 1-5
    - Slumpad tid mellan 10 min - 120 min
    - En lista med alla ingredienserna
    - En steg för steg guide som skriver in ingredienserna. Detta ska ske med någon slags förbestämd mall.
    */
    return(
        <div id="recipe">
            <div id="pullSignifier">
                <Typography sx={{ ml: 19.5, color:"#a3a3a3"}}>Drag ned</Typography>
                <KeyboardArrowDownRounded   sx={{ fontSize: 70, ml: '41%', color:"#a3a3a3"}}/>
            </div>
            <Typography sx={{mb:3}} align="center" variant="h5" fontWeight="bold">{recept.title}</Typography>
            {/* Kalla på style för h2 och basera på längd av title */}
            <div className="Center">
                <Button sx={{m: 10}} onClick={harSparat ? undo : save} variant="contained" startIcon={harSparat ? <Favorite /> : <FavoriteBorder /> }>{harSparat ? "Sparat!" : "Spara" }</Button>
            </div>

            <hr class="dotted"></hr>

            <div className="Center">
                <Stack sx={{mb: 2}} align="center" direction="row" spacing={1}>
                    <Chip icon={<RestaurantIcon/>} sx={{fontSize: 17, height: 35}} variant="outlined" label={"Port. " + recept.portion} />
                    <Chip icon={<AccessTimeIcon/>} sx={{fontSize: 17, height: 35}} label={recept.time} variant="outlined" /> 
                </Stack>
            </div>
                <Typography variant="h5" fontWeight="bold" sx={{mb: 1, ml: "10px"}}>Ingredienser</Typography>
                <Stack >
                    {recept.ingredients.map((element, index) => (
                    <ListItem sx={{fontSize: 19}} divider={index !== recept.ingredients.length-1 ? "true" : ""} key={index}>
                        {element}
                    </ListItem>))}
                </Stack>
                
                {/* <ul className="ingredienser">
                    {
                        
                    }
                </ul> */}
            <hr class="dotted"></hr>
        
            <Typography variant="h5" fontWeight="bold" sx={{ml: "10px"}}>Gör så här:</Typography>

            
            <ol className="steg" type="1">
                {recept.recipe.map((element, i) => (
                    <li key={i}>
                        <ListItem className="stegItem" key={i}>
                            {element}
                        </ListItem>
                    </li>
                ))}
                
            </ol>



            <div className="spaceBottom"/>
        </div>

    )
}

export default ReceptVy;