const request = require("request");
const jsdom = require ("jsdom");
const {JSDOM} = jsdom;
const xlsx = require("json-as-xlsx")
const fs = require("fs");

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = [];
let counter = 0;

request (link,cb);

function cb(error,response,html){
    if(error) {
        console.log(error)
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags = document.querySelectorAll('div.ds-px-4.ds-py-3');
        for(let i = 0; i<allScorecardTags.length; i++){
            let anchorTagAll = allScorecardTags[i].querySelectorAll('a')
            let link = anchorTagAll[2].href;
            let completeLink = "https://www.espncricinfo.com"+link;
            request(completeLink,cb2);
            counter++;
        }
    }
}
function cb2(error, response, html){
    if(error){
        console.log(error)
    }
    else{
        const dom = new JSDOM(html)
        const document = dom.window.document
        let batsmanRow = document.querySelectorAll("tr.ds-border-b.ds-border-line.ds-text-tight-s");
        for(let i = 0; i<batsmanRow.length; i++){
            let cells = batsmanRow[i].querySelectorAll("td");
            if(cells.length == 8){
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixes = cells[6].textContent;
                processPlayer(name,runs,balls,fours,sixes);
            }
        }
        counter--;
        if(counter == 0){
            console.log(leaderboard)
            let data = JSON.stringify(leaderboard)
            fs.writeFileSync('batsmanStats.json', data)
            let dataExcel = [
                {
                    sheet: "Ipl Stats",
                    columns: [
                        {label: "Name", value: "Name"},
                        {label: "Innings", value: "Innings"},
                        { label: "Runs", value: "Runs" }, // Custom format
                        { label: "Balls", value: "Balls" }, // Run functions
                        { label: "Fours", value: "Fours" },
                        { label: "Sixes", value: "Sixes" },
                    ],
                    content: leaderboard
                }
            ]

            let settings = {
                fileName: "BatsmenDetail", // Name of the resulting spreadsheet
                extraLength: 3, // A bigger number means that columns will be wider
                writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
            }
            xlsx(dataExcel, settings) // Will download the excel file
        }
   }
}



function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i = 0; i<leaderboard.length; i++){
        let playerObj = leaderboard[i]
        if(playerObj.Name == name){
            playerObj.Runs+=runs;
            playerObj.Balls+=balls;
            playerObj.Innings+=1;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes
            return;
        }
    }
        let obj = {
            Name: name,
            Runs: runs,
            Balls: balls,
            Innings: 1,
            Fours: fours,
            Sixes: sixes 
        }
    leaderboard.push(obj)
}

