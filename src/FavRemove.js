import * as React from 'react';
import { useParams, Navigate } from "react-router-dom";

export default function Remove () {
    const {nr} = useParams();
    let favoriter = JSON.parse(window.localStorage.getItem('favoriter'));


    let nummer = JSON.parse(window.localStorage.getItem('nr'));
    nummer = nummer -1;
    window.localStorage.setItem('nr', JSON.parse(nummer));

    return (
        <Navigate to={"/recept-roulette/Favoriter/"}/>
    )
  }