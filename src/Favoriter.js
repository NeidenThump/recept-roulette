import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard() {

  const retreivedObject = JSON.parse(window.localStorage.getItem('favoriter'))
  console.log(retreivedObject);

  return (
    <Card sx={{ maxWidth: 375, backgroundColor: '#222165', color: 'white'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {retreivedObject}
        </Typography>
        <Typography variant="body2">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
