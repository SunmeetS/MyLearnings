let cp=require("child_process");
// cp.execSync('code');
// cp.execSync('calci');

content=cp.execSync('node test.js')
console.log("Output of test.js: "+content)
