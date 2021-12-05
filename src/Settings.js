import React, { useState } from "react";

function Set(){
    const [Tag, setTag] = useState('');

    function handleChange(Event) {
        setTag(Event.target.value);
    }

    function handleSubmit(Event) {
        let retreivedObject = JSON.parse(window.localStorage.getItem('Tag'))
        let save = [Tag];
        // Saving to storage
        window.localStorage.setItem('Tag', JSON.stringify(save))
        Event.preventDefault();
    }
    
      return(
            <div>
                <form onSubmit={handleSubmit} className="input">
                    <input value={Tag} onChange={handleChange} className="text" type="text" placeholder="Lägg till ord..."></input>
                    <input value="+" className="submit" type="submit"/>
                </form>
            </div>
      );
}

function AddTag() {
    // Getting the storage
    let retreivedObject = JSON.parse(window.localStorage.getItem('Tag'))
    console.log(retreivedObject)

    return(
        <div className="tag" onClick="">
            <p onClick={remove}>{retreivedObject}</p>
        </div>
    );
}

function remove() {
    let retreivedObject = JSON.parse(window.localStorage.getItem('Tag'))
    retreivedObject.find();
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
            <div className="tagHolder">
                <AddTag/>
            </div>
        </div>
    );
}

export default AddWord;