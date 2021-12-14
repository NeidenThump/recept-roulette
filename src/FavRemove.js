import * as React from 'react';
import { useParams, Navigate } from "react-router-dom";

export default function Remove () {
    const {nr} = useParams();
    let favoriter = JSON.parse(window.localStorage.getItem('favoriter'));
    favoriter.splice(nr,1)
    window.localStorage.setItem('favoriter', JSON.stringify(favoriter))
    return (
        <Navigate to={"/recept-roulette/Favoriter/"}/>
    )
  }