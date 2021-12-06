import { Typography, Button, Stack ,Chip, ListItem } from "@mui/material";
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useState } from 'react';
import generate from './generateRecipe.js';
import PullToRefresh from 'pulltorefreshjs';

function ReceptVy({ingredienser, ordklasser,receptMall}){

    // Pull to refresh function does not refresh generate?
    PullToRefresh.init({
        mainElement: 'body',
        onRefresh() {
            generate("livs");
            window.location.reload();
        }
    });
    
    /*
    Från 4- 6 ingredienser ska det skapas:
    - En slumpad titel med några av de orden
    - Slumpade portioner mellan 1-5
    - Slumpad tid mellan 10 min - 120 min
    - En lista med alla ingredienserna
    - En steg för steg guide som skriver in ingredienserna. Detta ska ske med någon slags förbestämd mall.
    */

    //const obj = title;
    //window.localStorage.setItem('favoriter', JSON.stringify(obj))

    const [harSparat, setHarSparat] = useState(false);
    const spara = (e) =>{
        setHarSparat(!harSparat);
    }
    
    const title = window.localStorage.getItem("title");
    const ingr = JSON.parse(window.localStorage.getItem('ingredients'));
    const time = window.localStorage.getItem('time');
    const port = window.localStorage.getItem('port');
    return(
        <div id="recipe">
            <Typography align="center" variant="h4">{title}</Typography>
            {/* Kalla på style för h2 och basera på längd av title */}
            <div className="Center">
                <Button onClick={spara} variant="contained" startIcon={harSparat ? <Favorite /> : <FavoriteBorder /> }>Spara</Button>
            </div>

            <div className="Center">
                <Stack align="center" direction="row" spacing={1}>
                    <Chip size="" label={"Portioner: " + port} />
                    <Chip label={time} variant="outlined" />
                </Stack>
            </div>
                <Typography variant="h5">Ingredienser</Typography>

                <Stack>
                    {
                        ingr.map(element => (<ListItem divider="true">{element}</ListItem>))
                    }
                    
                </Stack>
                <ul className="ingredienser">
                    {
                        
                    }
                </ul>

                <h2>Gör så här</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br/><br/><br/>
                </p>
        </div>

    )
}

export default ReceptVy;


/*
function createRandArr(min,max,amount){
    for (var a=[],i=0;i<amount+1;++i) a[i]=getRandomArbitrary(min, max);
    return a;
}

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

    const randArr = createRandArr(1,1000,4);
    const foods = Object.values(Food.filter(food => randArr.includes(food.Nummer)).map(food => food.Namn));
    console.log(foods);

    const prepos = Object.values(Ordklasser.prepos);
    console.log(prepos);

    let title = [];

    for (let index = 0; index < foods.length; index++) {
        console.log(foods[index]);
        if(index%2===0){
            title[index] = foods[index] + " ";
        }else if((index+1)<foods.length && index < prepos.length){
            title[index] = prepos[index] + " ";
        }
    }
*/