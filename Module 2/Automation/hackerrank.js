const puppeteer = require('puppeteer');

let browserPromise = puppeteer.launch({headless: false});
let page;

browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    console.log("New page is opened");
    page = pageInstance;
    let urlPromise = pageInstance.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function(){
    console.log("HackerRank is opened");
    let waitPromise = page.waitForSelector('.menu-primary-right-buttons-container #menu-item-2887 a')
    return waitPromise;
}).then(function(){
    page.click(".menu-primary-right-buttons-container #menu-item-2887 a")
})