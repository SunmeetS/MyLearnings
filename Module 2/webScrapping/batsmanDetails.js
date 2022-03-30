const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request (link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM (html);
        const document = dom.window.document
        let batsmen = document.querySelectorAll("td.batsman-cell.text-truncate.out a")
        
        for(let i = 0; i<batsmen.length; i++){
            let batsmenLink = batsmen[i].href;
            let completeBatsmenLink = "https://www.espncricinfo.com/"+batsmen[i].href 
            request(completeBatsmenLink,cb1);
        }
    }
}

function cb1(error,response,html){
    if(error){
        console.log(error)
    }
    else{
        const dom = new JSDOM (html);
        const document = dom.window.document
        let details = document.querySelectorAll("h5.player-card-description.gray-900") 
        console.log("Name ==> ",details[0].textContent,"\nAge ==> ",details[1].textContent,"\n") 
    }
}