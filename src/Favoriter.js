import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ListItem } from "@mui/material";

export default function MediaCard() {
  const nr = window.localStorage.getItem('nr')


  const title = window.localStorage.getItem('FavTitle'+nr)
  const port = window.localStorage.getItem('FavPort'+nr)
  const time = window.localStorage.getItem('FAvTime'+nr)
  const ingr = JSON.parse(window.localStorage.getItem('FavIngredients'+nr))

  return (
    <Card sx={{ maxWidth: 375, backgroundColor: '#222165', color: 'white'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title, port, time}
        </Typography>
        <Typography variant="body2">
          <h2>Ingredienser</h2>
          {ingr.map((element, index) => (<ListItem divider="true" key={index}>{element}</ListItem>))}
        </Typography>
      </CardContent>
    </Card>
  );
}
