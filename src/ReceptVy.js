import Food from "./livsmedel.json";
import Ordklasser from "./ordklasser.json";
        
function createRandArr(min,max,amount){
    for (var a=[],i=0;i<amount+1;++i) a[i]=getRandomArbitrary(min, max);
    return a;
}

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function ReceptVy({ingredienser, ordklasser,receptMall}){
        
    /*
    Från 4- 6 ingredienser ska det skapas:
    - En slumpad titel med några av de orden
    - Slumpade portioner mellan 1-5
    - Slumpad tid mellan 10 min - 120 min
    - En lista med alla ingredienserna
    - En steg för steg guide som skriver in ingredienserna. Detta ska ske med någon slags förbestämd mall.
    */

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

    const obj = title;
    window.localStorage.setItem('favoriter', JSON.stringify(obj))

    return(
        <div>
            <h2 className="title">{title}</h2>
            {/* Kalla på style för h2 och basera på längd av title */}
            <div className="Center">
                <button className="saveButton" id="btn">Spara</button>
            </div>
                <div className="tidPort">
                    Portioner: 4 Tid: 20 min
                </div>

                <h2>Ingredienser</h2>
                <ul className="ingredienser">
                    {
                        
                    }
                    <li>Sak 1</li>
                    <li>Sak 2</li>
                    <li>Sak 3</li>
                    <li>Sak 4</li>
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