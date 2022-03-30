// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require ('fs');
let path = require ('path');

let arr = ['audio','video','image', 'text', 'software'];
let ext = ['.mp3','.mp4','.img','.txt','.apk'];
let fileName = ['abc','cde','bfg','gfr'];

for (let i = 0; i<arr.length; i++){
    let folderKaPath = path.join(__dirname,arr[i]);
    
    if(!fs.existsSync(folderKaPath))
        fs.mkdirSync(folderKaPath)
    for(let j = 0; j<fileName.length; j++){
        let fileKaName = fileName[j]+ext[i]
        let filekaPath = path.join(folderKaPath, fileKaName)
        fs.writeFileSync(filekaPath,"")    
    }


// const { fstat } = require("fs");

// let fs=require('fs');
// let path=require('path');

// let arr=['audio','video','image','software','documents','applications','other'];
// let nameArr=['abc','def','ghi','jkl'];
// extName=['.mp3','.mp4','.img','.exe','.pdf','.apk','.rar']

// let organised = path.join(__dirname,'organised')
// if(!fs.existsSync(organised))
//     fs.mkdirSync(organised)
// for(let i=0; i<=arr.length; i++){
//     let folderkapath=path.join(__dirname,arr[i])
//     if(!fs.existsSync(folderkapath))
//         fs.mkdirSync(folderkapath)

//     for(let j=0; j<=nameArr.length; j++){
//         let filename=nameArr[j]+extName[i]
//         let filekapath=path.join(folderkapath,filename)
//         fs.writeFileSync(filekapath,"")
//     }
}