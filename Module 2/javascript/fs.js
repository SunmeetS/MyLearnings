let fs=require('fs');
const { dirname } = require('path');

let path = require('path');

let filePath=path.join(__dirname,"file.txt");

// CRUD Operations
// Create Operation. It creates file if it doesnt exist else it overrides it.
fs.writeFileSync(filePath,"This is an empty new file created through fs.");

// Read Operation
console.log(fs.readFileSync(filePath));

//Update Operation
fs.appendFileSync(filePath," \nNewly Added Content through Update Function.")

// Delete Operation.
fs.unlinkSync(filePath)

// Crud operations on a Directory

// Read a directory
if(!fs.existsSync('Directory1'))
    fs.mkdirSync("Directory1");

// Writing in a directory

console.log(fs.readdirSync('Directory1'))

// Adding in a directory.
folderpath = __dirname;
filePath = path.join(folderpath,'Directory1','Apple.txt');
console.log(filePath)
fs.writeFileSync(filePath,'hi how are you')

fs.unlinkSync(filePath);

// fs.rmdirSync(path.join(folderpath,'Directory1'))

// copy a file 

sourcePath = path.join(__dirname, 'calculator.js');
destinationPath = path.join(__dirname,'Directory1','calculator.js');

fs.copyFileSync(sourcePath,destinationPath)

