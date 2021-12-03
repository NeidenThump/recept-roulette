import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 375, position: 'fixed', left: '50%', top: '96.5%', transform: 'translate(-50%, -50%)'}} value={value} onChange={handleChange}>
      <Link to="/recept-roulette/AddWord/"><BottomNavigationAction label="Recept" value="Recipe" icon={<SettingsIcon />}/></Link>
      <Link to="/recept-roulette/"><BottomNavigationAction label="Hem" value="Home" icon={<HomeIcon />}/></Link>
      <Link to="/recept-roulette/Favoriter/"><BottomNavigationAction label="Favoriter" value="Favorite" icon={<FavoriteIcon />}/></Link>
    </BottomNavigation>
  );
}