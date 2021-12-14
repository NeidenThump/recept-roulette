const fs = require('fs');
//const fileName = './livsmedel.json';
const file = require(fileName);

let counter = 0;

//change json
//typ|ca|kylvara|lätt|berikad|hemlagad|vatten| u |mager| (veg)|frysvara| lag| el |tillagad|klar|redd|
for (let index = 0; index < file.length; index++) {
    const element = file[index];
    
    element['Namn'] = element['Namn'].replace(/[ \t]+$/g, '');
    counter++;
}

console.log("Iterations: " +counter);

//Write to json
fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    //console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
});
