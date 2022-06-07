let cp=require("child_process");
// cp.execSync('code');
// cp.execSync('calci');

// content=cp.execSync('node test.js')
// console.log("Output of test.js: "+content)
// cp.execSync('start chrome https://nados.pepcoding.com')

content = cp.execSync('node test.js')
console.log('Output '+content)