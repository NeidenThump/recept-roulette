import { Cancel } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import generateRecipe from './generateRecipe';

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

  return (
    <div>
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
    console.log(t.length)
    t.splice(t.indexOf(value),1);
    window.localStorage.setItem('Tag', JSON.stringify(t));
    console.log(t)
    console.log("---------------")
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

            <h2 className="AddWordTitle">Egna ingredienser</h2>
            <h3 className="tagTitle">Taggar</h3>
        <Box sx={{ flexGrow: 1 }}>
        <form className="input" onChange={handleChange} onSubmit={handleOnSubmit}>
        <TextField
        inputRef={tagRef}
        variant='standard'
        size='small'
        sx={{width: 290, height: 44, marginRight: 5}}
        placeholder={tags.length < 5 ? "Enter tags" : ""}/>
        <input value="+" className="submit" type="submit"/>
    </form>
    <Box className="tagHolder">
      {/* <Output/> */}
      {tags.map((data, index) => { return (<Tags data={data} handleDelete={handleDelete} key={index}/>)})}
    </Box>
  </Box>
  </div>
  );
}