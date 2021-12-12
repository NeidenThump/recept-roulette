import * as React from 'react';
import Favorit from './Favorit';
import { v4 as uuidv4 } from 'uuid';
import { Typography } from '@mui/material';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';

export default function MediaCard() {
  const favoriter = JSON.parse(window.localStorage.getItem('favoriter'));
  console.log(favoriter)
  return (
    <div>
      {favoriter.length === 0 ? 
      <div>
        <SentimentDissatisfiedRoundedIcon color="disabled" sx={{ fontSize: 80,mt:'40vh', ml: '40vw'}}/><Typography sx={{color:"#BDBDBD"}} align="center" variant="h5">Finns inga sparade recept...</Typography>
      </div> 

      : favoriter.map((element, index) => (<Favorit recipe={element} nr={index} key={uuidv4()}/>))}

      <div className="spaceBottom"/>
    </div>
  );
}
