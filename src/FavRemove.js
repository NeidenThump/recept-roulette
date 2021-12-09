import * as React from 'react';
import { useParams, Navigate } from "react-router-dom";

export default function Remove () {
    const {nr} = useParams();
    window.localStorage.removeItem('FavTitle'+nr);
    window.localStorage.removeItem('FavPort'+nr);
    window.localStorage.removeItem('FavTime'+nr);
    window.localStorage.removeItem('FavIngredients'+nr);
  
    let nummer = JSON.parse(window.localStorage.getItem('nr'));
    nummer = nummer +1
    window.localStorage.setItem('nr', JSON.parse(nummer));

    return (
        <Navigate to={"/recept-roulette/Favoriter/"}/>
    )
  }