import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack ,Chip, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Favorit({recipe, key}) {
  return(
    <div>
        <Link style={{ textDecoration: 'none'}} to={"/recept-roulette/Favoriter/"+key}>
            <Card sx={{ alignContent: 'center', marginTop: 1, marginLeft: 1, width: 355, backgroundColor: '#F8CE7A', color: 'white'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{recipe.title}</Typography>
                    <Stack sx={{ color: 'white' }} align="center" direction="row" spacing={1}>
                        <Chip size="" label={"Portioner: " + recipe.portion} />
                        <Chip label={recipe.time} variant="outlined" /> 
                    </Stack>
                    <Typography variant="body2">
                        <Typography gutterBottom variant="h4">Ingredienser</Typography>
                        {recipe.ingredients && (recipe.ingredients.map((element, index) => (<ListItem divider={true} key={index}>{element}</ListItem>)))}     
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    </div>
  );
}