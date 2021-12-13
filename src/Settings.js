import { Cancel } from "@mui/icons-material";
import { Stack, TextField, Typography, InputLabel, FormControl, Select, Alert, AlertTitle} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import generateRecipe from './generateRecipe';
import CardContent from '@mui/material/CardContent';

//Dropdown
function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id) => {
    setAnchorEl(null);
    generateRecipe(id);
  };

  const [getIngr, setGetIngr] = useState("livs");
  const handleChange = (event) => {
    setGetIngr(event.target.value);
  };

  return (
    <div>
      {/*
      <Button
        sx={{ backgroundColor: '#222165', color: "white"}}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <div className="menuButton">
          <p>Hämta ingredienser</p>
          <KeyboardArrowDownIcon/>
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={() => handleClose("livs")}>Standard databas</MenuItem>
        <MenuItem onClick={() => handleClose("egen")}>Egna ingredienser</MenuItem>
        <MenuItem onClick={() => handleClose("blanda")}>Blanda</MenuItem>
      </Menu>
      */}
      <Typography sx={{mb:3, mt: 10}} align="center" variant="h5" fontWeight="bold">Databas för ingredienser</Typography>
      <Typography sx={{mb:3, mt: 10}}>detalj texts</Typography>
      <Box sx={{ minWidth: 300 }}>
        <FormControl fullWidth >
          <InputLabel>Hämta från</InputLabel>
          <Select
            value={getIngr}
            label="Hämta från"
            onChange={handleChange}
          >
            <MenuItem value={"livs"}>Standard databas</MenuItem>
            <MenuItem value={"egen"}>Egna ingredienser</MenuItem>
            <MenuItem value={"blanda"}>Både egna och standard</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}




const Tags = ({ data, handleDelete }) => {
  return (
    <Box
      sx={{
        background: "#283240",
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "10px 0 0 10px",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction='row' gap={1}>
        <Typography>{data}</Typography>
        <Cancel sx={{ cursor: "pointer" }} onClick={() => { handleDelete(data); }}/>
      </Stack>
    </Box>
  );
};

export default function InputTags() {
  let t = JSON.parse(window.localStorage.getItem('Tag'))

  const [tags, SetTags] = useState(Array.isArray(t) ? t : []);
  const tagRef = useRef();
  const [inputText, SetinputText] = useState("");

  const handleDelete = (value, key) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
    t.splice(t.indexOf(value),1);
    window.localStorage.setItem('Tag', JSON.stringify(t));
  };

  const handleOnSubmit = (e) => {
    //Saving to storage
    e.preventDefault();
    SetTags([...tags, inputText]);
    window.localStorage.setItem('Tag', JSON.stringify([...tags, inputText]));
    SetinputText("");
    tagRef.current.value = "";
  };

  const handleChange = (e) => {
    SetinputText(e.target.value)
  }
  return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"/>
        
        <div className="menu">
          <BasicMenu/>
        </div>

        <Typography sx={{mb:3, mt: 10}} align="center" variant="h5" fontWeight="bold">Lägg till egna ingredienser</Typography>

        <Box sx={{  }}>
          <form className="input" onChange={handleChange} onSubmit={handleOnSubmit}>
            <TextField
              inputRef={tagRef}
              variant='standard'
              size='small'
              sx={{width: 290, height: 44, marginRight: 5}}
              placeholder={tags.length < 5 ? "Enter tags" : ""}
            />

            <input value="+" className="submit" type="submit"/>
          </form>
          
          <CardContent sx={{ width: 325, height: 270, marginTop: 3, marginLeft: 1.2, backgroundColor: '#E2ECEA', borderRadius: 2 }}>
            {tags.length < 3 ? <Alert severity="warning" >
                <AlertTitle>Varning!</AlertTitle>
                Det måste finnas minst 3 ingredienser <strong>annars hämtas ingredienser från standard databasen!</strong>
            </Alert>
            : ""}
            
            <Box className="tagHolder">
              {tags.map((data, index) => { return (<Tags data={data} handleDelete={handleDelete} key={index}/>)})}
            </Box>

          </CardContent>
          
        </Box>
  </div>
  );
}