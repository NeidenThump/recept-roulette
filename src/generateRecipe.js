import livs from './databaser/livsmedel.json';
import ord_mallar from './databaser/mallar.json';

// Get random number between min max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// Creates an array filled with random numbers
function createRandArr(min,max,amount){
    for (var a=[],i=0;i<amount;++i) a[i]=getRandomIntInclusive(min, max);
    return a;
}

//Generate a new recipe from a food database, words (adjectives, verbs etc), and recipe template
export default function createRecipe(dataBaseType){
    const MAX_INGREDIENTS = 8;
    const MIN_INGREDIENTS = 4;
    const TITLE_ITERATIONS = getRandomIntInclusive(1,2); //One iteration = TILLAGNINGSSÄTT INGREDIENS#1 PREPOSITION INGREDIENS#2
    const CUSTOM_DB_MINIMUM = 3;
    const prepos = Object.values(ord_mallar.prepos);
    const tags = JSON.parse(window.localStorage.getItem("Tag"));

    const STEP_AMOUNT = getRandomIntInclusive(1,3); // Intro + 1-3 steps + End
    const firstSteps = Object.values(ord_mallar.början_mallar);
    const middleSteps = Object.values(ord_mallar.mallar);
    const finalSteps = Object.values(ord_mallar.avslut_mallar);

    // Mix if "egna ingredienser" is too small
    if(dataBaseType==="egen" && tags.length < CUSTOM_DB_MINIMUM){
        dataBaseType = "blanda";
        window.localStorage.setItem("getFromDB", "blanda");
    }
    console.log(dataBaseType + "DB");

    //Declaring variables
    let foodID = [];
    let ingredients = [];
    let title = ord_mallar.adjektiv[getRandomIntInclusive(0,ord_mallar.adjektiv.length-1)] + " "; //First word is cooking method
    let time = getRandomIntInclusive(2,900) + " " + ord_mallar.tidsenhet[getRandomIntInclusive(0,ord_mallar.tidsenhet.length-1)];
    let portion = getRandomIntInclusive(0,500);
    let recipe = [];

    //Check what kind of database. Databasetype should be "livs", "egen" or "blanda"
    //Get the ingredients from the right database
    switch (dataBaseType) {
        //Database's ID set ranges from 1 to (a little bit over) 1000
        case "livs":
            while(ingredients.length < MIN_INGREDIENTS){
                foodID = createRandArr(1, 6000, MAX_INGREDIENTS);
                ingredients = Object.values(livs.filter(foodElement => foodID.includes(foodElement.Nummer)).map(foodElement => foodElement.Namn));
            }
            
            break;
        
        //We don't know how big "egna ingredienser" is. Must be minimum of 3
        case "egen":
            //copying arrays
            for (let i = 0; i < tags.length; i++) {
                ingredients.push(tags[i].toString());
            }
            
            break;
        
        case "blanda":
            let ingredientsAmount = Math.floor(MAX_INGREDIENTS/2);

            while(ingredients.length < ingredientsAmount){
                foodID = createRandArr(1, 6000, ingredientsAmount);
                ingredients = Object.values(livs.filter(foodElement => foodID.includes(foodElement.Nummer)).map(foodElement => foodElement.Namn));
            }
            
            if(tags.length < ingredientsAmount){
                ingredientsAmount = tags.length;
            }

            for (let i = 0; i < ingredientsAmount; i++) {
                ingredients.push(tags[getRandomIntInclusive(0,tags.length-1)].toString());
            }
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
                title += ingredients[getRandomIntInclusive(0,ingredients.length-1)] + " ";
            }else{
                title += prepos[getRandomIntInclusive(0,prepos.length-1)] + " ";
            }
        }
    } else{
        for (let i = 0; i < 6; i++) {
            if(i===4){ //even number
                title += ord_mallar.adjektiv[getRandomIntInclusive(0,ord_mallar.adjektiv.length-1)] + " ";
            }else if(i%2===0 || i===5){
                title += ingredients[getRandomIntInclusive(0,ingredients.length-1)] + " ";
            }
            else{
                title += prepos[getRandomIntInclusive(0,prepos.length-1)] + " ";
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
    
    //Formating
    title = title.charAt(0).toUpperCase() + title.toLowerCase().slice(1);

    console.log(ingredients);
    //Generating recipe steps

    
    //First step
    recipe.push(firstSteps[getRandomIntInclusive(0,firstSteps.length-1)].replaceAll("#",ingredients[getRandomIntInclusive(0,ingredients.length-1)].toLowerCase()));


    //Middle steps
    let usedTemplate = []; // Used for getting unique template each time
    for (let index = 0; index < STEP_AMOUNT; index++) {
        let getTemplateIndex = getRandomIntInclusive(0,middleSteps.length-1);
        while(usedTemplate.includes(getTemplateIndex)){
            getTemplateIndex = getRandomIntInclusive(0,middleSteps.length-1);
        }

        recipe.push(middleSteps[getTemplateIndex].replaceAll("#", ()=>{return ingredients[getRandomIntInclusive(0,ingredients.length-1)].toLowerCase()}))
        usedTemplate.push(getTemplateIndex);
    }

    //Last step

    recipe.push(finalSteps[getRandomIntInclusive(0,finalSteps.length-1)].replaceAll("#",()=>{return ingredients[getRandomIntInclusive(0,ingredients.length-1)].toLowerCase()}));
    
    //adding units to ingredients
    for(let i = 0; i < ingredients.length; i++){
        ingredients[i] = getRandomIntInclusive(1,100)+ " " + ord_mallar.enhet[getRandomIntInclusive(0,ord_mallar.enhet.length-1)] +  " "+ ingredients[i];
    }


    const recept = { title: title, time: time, portion: portion, ingredients: ingredients, recipe: recipe}
    //Write out the result in web storage
    window.localStorage.setItem("recept", JSON.stringify(recept));
    return recept;
}