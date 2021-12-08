import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack ,Chip, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Favorit({nr}) {
    const title = window.localStorage.getItem('FavTitle'+nr)
    const port = window.localStorage.getItem('FavPort'+nr)
    const time = window.localStorage.getItem('FavTime'+nr)
    const ingr = JSON.parse(window.localStorage.getItem('FavIngredients'+nr))
  return(
    <div>
        <Link style={{ textDecoration: 'none'}} to="/recept-roulette/Recept/">
            <Card sx={{ alignContent: 'center', marginTop: 1, marginLeft: 1, width: 355, backgroundColor: '#F8CE7A', color: 'white'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                    <Stack align="center" direction="row" spacing={1}>
                        <Chip size="" label={"Portioner: " + port} />
                        <Chip label={time} variant="outlined" /> 
                    </Stack>
                    <Typography variant="body2">
                        <Typography gutterBottom variant="h4">Ingredienser</Typography>
                            {ingr.map((element, index) => (<ListItem divider="true" key={index}>{element}</ListItem>))}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    </div>
  );
}