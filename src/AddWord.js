import icon from './spoonKnife.png';

function AddWord() {
    return(
        <div className="AddWord">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"/>
            <h2 className="AddWordTitle">Egna ingredienser</h2>
            <img src={icon} alt=""/>
            <div className="input">
                <input className="text" type="text" placeholder="Lägg till ord..."></input>
                <input value="+" className="submit" type="submit"/>
            </div>
            <hr/><p>Föreslagna ord:</p><hr/>
        </div>
    );
}

export default AddWord;