//copy index.html file from module1 to a new folder inside module2 having name html.
let fs=require('fs')
let path=require('path');


let folderkapath = path.join(__dirname,'..','..','html')
if(!fs.existsSync('html'))
    fs.mkdirSync(folderkapath,'html')
    
let sourcePath = path.join(__dirname,'..','..','..','Module 1','index.html')
console.log(sourcePath)
let destinationPath = path.join(__dirname,'..','..','html','index.html');
console.log(destinationPath)

fs.copyFileSync(sourcePath,destinationPath)

