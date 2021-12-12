import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack ,Chip, ListItem, CardActionArea, CardActions, IconButton , Collapse} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function Favorit({recipe, nr}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handlePressedCard = ()=>{
        window.localStorage.setItem("recept", JSON.stringify(recipe));
        window.localStorage.setItem("savedOnce", 1);
    }
  return(
            <Card sx={{ boxShadow: 4,alignContent: 'center',mt:1, mb: 5, marginLeft: 1.5, width: 355, backgroundColor: '#FFFFFF', color: 'black'}}>
                <CardActionArea onClick={handlePressedCard} component={Link} to="/recept-roulette/Recept/">
                <CardContent>
                    <Typography align="center" variant="h5" fontWeight="bold">{recipe.title}</Typography>
                </CardContent>
                

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div className="Center">
                        <Stack sx={{ color: 'white' }} align="center" direction="row" spacing={1}>
                            <Chip variant="outlined" size="" label={"Portioner: " + recipe.portion} />
                            <Chip label={recipe.time} variant="outlined" />
                        </Stack>
                    </div>
                    <Typography variant="body2">
                        <Typography variant="h5" fontWeight="bold" sx={{mt: 3, ml: "10px"}}>Ingredienser</Typography>
                        {recipe.ingredients && (recipe.ingredients.map((element, index) => (<ListItem divider={true} key={index}>{element}</ListItem>)))}     
                    </Typography>
                </CardContent>
                </Collapse>

                </CardActionArea>
                <CardActions sx={{backgroundColor: '#E2ECEA', padding: 0.1}} >
                    <IconButton component={Link} to={"/recept-roulette/Favoriter/"+nr} size="large" aria-label='remove' color="error">
                        <DeleteForeverIcon sx={{}} fontSize="inherit"/>
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        size="large"
                        sx={{padding: 0.7}}
                    >
                    <ExpandMoreIcon sx={{fontSize: 38}}/>
                    </ExpandMore>
                </CardActions>
            </Card>
  );
}