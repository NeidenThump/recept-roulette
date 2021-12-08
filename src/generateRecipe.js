import livs from './databaser/livsmedel.json';
import ord_mallar from './databaser/mallar.json';
import egen from './databaser/egnaIngredienser.json';

// Get random number between min max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

// Creates an array filled with random numbers
function createRandArr(min,max,amount){
    for (var a=[],i=0;i<amount+1;++i) a[i]=getRandomIntInclusive(min, max);
    return a;
}

//Generate a new recipe from a food database, words (adjectives, verbs etc), and recipe template
export default function createRecipe(dataBaseType){
    const MAX_INGREDIENTS = 7;
    const TITLE_ITERATIONS = getRandomIntInclusive(1,2); //One iteration = TILLAGNINGSSÄTT INGREDIENS#1 PREPOSITION INGREDIENS#2
    const CUSTOM_DB_MINIMUM = 3;
    const prepos = Object.values(ord_mallar.prepos);

    // Mix if "egna ingredienser" is too small
    if(dataBaseType==="egen" && egen.length < CUSTOM_DB_MINIMUM){
        dataBaseType = "blanda";
    }

    //Declaring variables
    let foodID = [];
    let ingredients = [];
    let title = ord_mallar.adjektiv[getRandomIntInclusive(0,ord_mallar.adjektiv.length-1)] + " "; //First word is cooking method
    let time = getRandomIntInclusive(2,900) + " " + ord_mallar.tidsenhet[getRandomIntInclusive(0,ord_mallar.tidsenhet.length-1)];
    let portion = getRandomIntInclusive(0,500);
    //let recipe = [];

    //Check what kind of database. Databasetype should be "livs", "egen" or "blanda"
    //Get the ingredients from the right database
    switch (dataBaseType) {
        //Database's ID set ranges from 1 to (a little bit over) 1000
        case "livs":
            foodID = createRandArr(1, 1000, MAX_INGREDIENTS);
            ingredients = Object.values(livs.filter(foodElement => foodID.includes(foodElement.Nummer)).map(foodElement => foodElement.Namn.replace(/[^a-öA-Ö0-9]/g, ' ')));
            break;
        
        //We don't know how big "egna ingredienser" is. Must be minimum of 3
        case "egen":
            foodID = createRandArr(1, egen.length, MAX_INGREDIENTS);
            break;
        
        case "blanda":

            break;
        default:
            break;
    }

    // Get ingredients, generate recipe , write it in nuvaranderecept

    //Old code
    //const foods = Object.values(foodDatabase.filter(foodElement => randArr.includes(foodElement.Nummer)).map(foodElement => foodElement.Namn));

    //mix the prepos array beforehand?

    //Genererar titeln. First iteration = [TILLAGNINGSSÄTT] INGREDIENS#1 PREPOSITION INGREDIENS#2  
    // Two iterations: [TILLAGNINGSSÄTT] + INGREDIENS#1 + PREPOSITION + INGREDIENS#2 + PREPOSITION + TILLAGNINGSSÄTT + INGREDIENS#3 

    if(TITLE_ITERATIONS === 1){
        for (let i = 0; i < 3; i++) {
            if(i%2===0){ //even number
                title += ingredients[i] + " ";
            }else{
                title += prepos[i] + " ";
            }
        }
    } else{
        for (let i = 0; i < 6; i++) {
            if(i===4){ //even number
                title += ord_mallar.adjektiv[getRandomIntInclusive(0,ord_mallar.adjektiv.length-1)] + " ";
            }else if(i%2===0){
                title += ingredients[i] + " ";
            }
            else{
                title += prepos[i] + " ";
            }
        }
    }

    /* OLD CODE
    if(index%2===0){
        title[index] = foods[index] + " ";
    }else if((index+1)<foods.length && index < prepos.length){
        title[index] = prepos[index] + " ";
    }
    */


    //Write out the result in web storage
    window.localStorage.setItem("title", title);
    window.localStorage.setItem("time", time);
    window.localStorage.setItem("port", portion);
    window.localStorage.setItem("ingredients", JSON.stringify(ingredients));
    //return[title, timeString, portion, ingredients, recipe];
}