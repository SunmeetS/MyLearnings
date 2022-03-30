let path = require("path");
let fs = require("fs");
let folderPath = process.argv[2];

let extensions = {
    Audio: ['.mp3'],
    Text: ['.txt','.xls','.doc'],
    Video: ['.mp4']
};

if (fs.existsSync(folderPath)){
    let files = fs.readdirSync(folderPath);
    for(let i = 0; i<files.length; i++){
        ext = path.extname(files[i]);
        let nameOfFolder = givefoldername(ext);
        console.log(folderPath,nameOfFolder);
        let pathOfFolder = path.join(folderPath,nameOfFolder);
        if(fs.existsSync(pathOfFolder)){
            moveFile(folderPath,pathOfFolder,files[i])
        }
        else{
            fs.mkdir(pathOfFolder,function(err, ) {
                if(err) {
                    console.log("Error occured!!",err.message)
                }
            });
            moveFile(folderPath,pathOfFolder,files[i])
        }
    }
}
else{
    console.log("Invalid path")
}


function givefoldername(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for (let j = 0; j<extArr.length; j++){    
            if (extArr[j] == ext){
                return key;
            }
        }
    }
}

function moveFile(folderPath,pathOfFolder,fileName){
    srcPath = path.join(folderPath,fileName);
    destPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(srcPath,destPath);
    fs.unlinkSync(srcPath)
}