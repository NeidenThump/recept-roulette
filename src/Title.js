import Food from "./livsmedel.json";

function createRandArr(min,max,amount){
    for (var a=[],i=0;i<amount+1;++i) a[i]=getRandomArbitrary(min, max);
    return a;
}

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}



function Title(){
    const randArr = createRandArr(200,500,7);

    console.log(randArr);
    return(
        <div>
            {
                Food.map((food, i) => {
                    console.log(randArr.includes(food.Nummer))
                    if(randArr.includes(food.Nummer)){
                        console.log(food.Nummer)
                        return(
                            <p>
                                {food.Namn}
                            </p>
                        )
                    }
                })
                    
            }
        </div>
    );
}

export default Title;