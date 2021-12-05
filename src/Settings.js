import ingrediens from './EgnaIngredienser.json';
import React, { useState } from "react";

function Set(){
    const [Tags, setTags] = useState("");

    // Getting the storage
    const retreivedObject = JSON.parse(window.localStorage.getItem('EgnaIngredienser'))
    console.log(retreivedObject)


    // const b = ",";
    const word = "Tags";


    const obj = {
        "ingrediens": [
             word
        ]
    };


    const save = obj;
    // Saving to storage
    window.localStorage.setItem('EgnaIngredienser', JSON.stringify(save))

    function changeInput(event) {
        setTags(event.target.value);
      }
      
        const taggar = ({data}) => {
        return(
            <div className="tag">
                <p>{data}</p>
            </div>
        );
    }
      return(
            <div>
                <form className="input">
                    <input className="text" type="text" placeholder="Lägg till ord..."></input>
                    {/* <input value="+" className="submit" type="submit" onClick={changeInput()}/> */}
                </form>
                {/* {ingrediens.map((c) => (<taggar key={c} data={c} />))} */}
            </div>
      );
}

function AddWord() {
    return(
        <div className="AddWord">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"/>
            
            <h2 className="AddWordTitle">Egna ingredienser</h2>
            <h3 className="tagTitle">Taggar</h3>
            <Set/>
        </div>
    );
}

export default AddWord;