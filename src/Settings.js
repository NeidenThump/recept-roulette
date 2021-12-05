// import React, { useState } from "react";
import { Cancel, Tag } from "@mui/icons-material";
import { FormControl, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";

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
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export default function InputTags() {
  const [tags, SetTags] = useState([]);
  const tagRef = useRef();

  const handleDelete = (value) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    SetTags([...tags, tagRef.current.value]);
    tagRef.current.value = "";
  };
  return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
             <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"/>
            
             <h2 className="AddWordTitle">Egna ingredienser</h2>
             <h3 className="tagTitle">Taggar</h3>
        <Box sx={{ flexGrow: 1 }}>
        <form className="input" onSubmit={handleOnSubmit}>
        <TextField
        inputRef={tagRef}
        variant='standard'
        size='small'
        sx={{width: 290, height: 44, marginRight: 5}}
        placeholder={tags.length < 5 ? "Enter tags" : ""}/>
        <input value="+" className="submit" type="submit"/>
    </form>
    <Box className="input">
              {tags.map((data, index) => {
                return (
                  <Tags data={data} handleDelete={handleDelete} key={index} />
                );
              })}
            </Box>
  </Box>
  </div>
  );
}

// function Set(){
//     const [Tag, setTag] = useState('');

//     function handleChange(Event) {
//         setTag(Event.target.value);
//     }

//     function handleSubmit(Event) {
//         let retreivedObject = JSON.parse(window.localStorage.getItem('Tag'))
//         let save = [Tag];
//         // Saving to storage
//         window.localStorage.setItem('Tag', JSON.stringify(save))
//         Event.preventDefault();
//     }
//       return(
//             <div>
//                 <form onSubmit={handleSubmit} className="input">
//                     <input value={Tag} onChange={handleChange} className="text" type="text" placeholder="Lägg till ord..."></input>
//                     <input value="+" className="submit" type="submit"/>
//                 </form>
//             </div>
//       );
// }

// function AddTag() {
//     // Getting the storage
//     let retreivedObject = JSON.parse(window.localStorage.getItem('Tag'))
//     console.log(retreivedObject)

//     return(
//         <div className="tag" onClick="">
//             <p onClick={remove}>{retreivedObject}</p>
//         </div>
//     );
// }

// function remove() {
//     let retreivedObject = JSON.parse(window.localStorage.getItem('Tag'))
//     retreivedObject.find();
// }

// function AddWord() {
//     return(
//         <div className="AddWord">
//             <link rel="preconnect" href="https://fonts.googleapis.com"/>
//             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
//             <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"/>
            
//             <h2 className="AddWordTitle">Egna ingredienser</h2>
//             <h3 className="tagTitle">Taggar</h3>
//             <Set/>
//             <div className="tagHolder">
//                 <AddTag/>
//             </div>
//         </div>
//     );
// }

// export default AddWord;