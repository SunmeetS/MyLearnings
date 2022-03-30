let path=require("path");

extensionName=path.extname("C:\Users\Acer\OneDrive\Desktop\FJP6 Dev\Module 2\introToNode\path.js");
console.log(extensionName);

directoryName=path.dirname("C:\Users\Acer\OneDrive\Desktop\FJP6 Dev\Module 2\introToNode\path.js");
console.log(directoryName);

baseName=path.basename('C:\Users\Acer\OneDrive\Desktop\FJP6 Dev\Module 2\introToNode\path.js');
console.log(baseName)

console.log(path.basename(__filename));

console.log(__filename);

// To create a new file.
newFilePath=path.join(__dirname,"test.js");
