//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs= require("fs");
let path = require("path");
const { text } = require("stream/consumers");

if(!fs.existsSync("NewFolder"))
    fs.mkdirSync('NewFolder')

textFile = path.join(__dirname,'NewFolder','Text.txt');
fs.writeFileSync(textFile,"New file has been made")