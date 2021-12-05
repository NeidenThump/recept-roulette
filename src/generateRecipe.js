import livs from 'databaser/livsmedel.json';
import ord_mallar from 'databaser/mallar.json';
import egen from 'databaser/egnaIngredienser.json';

// Get random number between min max
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Creates an array filled with random numbers
function createRandArr(min,max,amount){
    for (var a=[],i=0;i<amount+1;++i) a[i]=getRandomArbitrary(min, max);
    return a;
}

//Generate a new recipe from a food database, words (adjectives, verbs etc), and recipe template
export default function createRecipe(dataBaseType){
    const MAX_INGREDIENTS = 7;
    const CUSTOM_DB_MINIMUM = 3;

    // Mix if "egna ingredienser" is too small
    if(dataBaseType==="egen" && foodDatabase.length < CUSTOM_DB_MINIMUM){
        dataBaseType = "blanda";
    }

    //Declaring variables
    let foodID = [];
    let ingredients = [];
    let title = "Default";
    let time = 0;
    let timeUnit = "min";
    let portion = 1;
    let recipe = [];

    //Check what kind of database. Databasetype should be "livs", "egen" or "blanda"
    //Get the ingredients from the right database
    switch (dataBaseType) {
        //Database's ID set ranges from 1 to (a little bit over) 1000
        case "livs":
            foodID = createRandArr(1, 1000, MAX_INGREDIENTS);
            ingredients = Object.values(livs.filter(foodElement => foodID.includes(foodElement.Nummer)));
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

    //Use the random array
    const foods = Object.values(foodDatabase.filter(foodElement => randArr.includes(foodElement.Nummer)).map(foodElement => foodElement.Namn));
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

    return[title, timeString, portion, ingredients, recipe];
}