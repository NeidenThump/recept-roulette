import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState, useEffect} from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('Home');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let location = useLocation()

  useEffect(
    () => {
      setValue(location.pathname.match(/([^\/]*)\/*$/)[1]);
    },
    [location]
  )

  return (
    <BottomNavigation sx={{ display: 'flex', justifyContent: 'space-around', width: 375, position: 'fixed', left: '50%', top: '97.2%', transform: 'translate(-50%, -50%)'}} value={value} onChange={handleChange}>
      <BottomNavigationAction component={Link} to="/recept-roulette/Settings/" sx={{width: 125}} label="Inställningar" value="Inställningar" icon={<SettingsIcon />}/>
      <BottomNavigationAction component={Link} to="/recept-roulette/Recept/" sx={{width: 125}} label="Recept" value="Recept" icon={<ArticleIcon />}/>
      <BottomNavigationAction component={Link} to="/recept-roulette/Favoriter/" sx={{width: 125}} label="Favoriter" value="Favoriter" icon={<FavoriteIcon />}/>
    </BottomNavigation>
  );
}