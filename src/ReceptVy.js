import { Typography, Button, Stack ,Chip, ListItem } from "@mui/material";
import { Favorite, FavoriteBorder, KeyboardArrowDownRounded, Refresh } from '@mui/icons-material';
import { useState, useEffect} from 'react';
import generate from './generateRecipe.js';
import PullToRefresh from 'pulltorefreshjs';
import { textAlign } from "@mui/system";


function ReceptVy(){
    const storedRecipe = JSON.parse(window.localStorage.getItem('recept'));
    const [recept, setRecept] = useState(storedRecipe == null ? generate("livs") : storedRecipe);
    console.log("State recipe: " + recept);

    const [harSparat, setHarSparat] = useState(false);
    const spara = (e) =>{
        setHarSparat(!harSparat);
        saveToStorage();
    }

    useEffect(()=>{
        // Pull to refresh function does not refresh generate?
        PullToRefresh.init({
            mainElement: '#recipe',
            instructionsPullToRefresh: "Drag ner för ett nytt recept",
            instructionsReleaseToRefresh: "Släpp för ett nytt recept",
            instructionsRefreshing: "Genererar recept",
            onRefresh() {
                let newRecipe = generate("livs");
                setRecept(newRecipe);
                setHarSparat(false);
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

     function saveToStorage() {
        //const recept = window.localStorage.getItem("recept")
        let receptlist = JSON.parse(window.localStorage.getItem("favoriter"))
        receptlist = Array.isArray(receptlist) ? receptlist : []
        receptlist.push(recept)
        //Write out the result in web storage
        window.localStorage.setItem("favoriter", JSON.stringify(receptlist));
    }

    return(
        <div id="recipe">
            <KeyboardArrowDownRounded id="pullSignifier" color="primary" sx={{ fontSize: 80, ml: '40%'}}/>
            <Typography align="center" variant="h5" fontWeight="bold">{recept.title}</Typography>
            {/* Kalla på style för h2 och basera på längd av title */}
            <div className="Center">
                <Button onClick={spara} variant="contained" startIcon={harSparat ? <Favorite /> : <FavoriteBorder /> }>{harSparat ? "Sparat!" : "Spara" }</Button>
            </div>

            <div className="Center">
                <Stack align="center" direction="row" spacing={1}>
                    <Chip size="" label={"Portioner: " + recept.portion} />
                    <Chip label={recept.time} variant="outlined" /> 
                </Stack>
            </div>
                <Typography variant="h5" fontWeight="bold" sx={{ml: "10px"}}>Ingredienser</Typography>
                <Stack>
                    {recept.ingredients.map((element, index) => (<ListItem divider="true" key={element}>{element}</ListItem>))}
                </Stack>
                
                {/* <ul className="ingredienser">
                    {
                        
                    }
                </ul> */}

                <h2>Gör så här</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="spaceBottom"/>
        </div>

    )
}

export default ReceptVy;