import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 375, position: 'absolute', left: '50%', top: '96.5%', transform: 'translate(-50%, -50%)'}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Inställningar"
        value="Settings"
        icon={<SettingsIcon />}
      />

      <BottomNavigationAction
        label="Hem"
        value="Home"
        icon={<HomeIcon />}
      />
      
      <BottomNavigationAction
        label="Favoriter"
        value="Favorite"
        icon={<FavoriteIcon />}
      />

    </BottomNavigation>
  );
}