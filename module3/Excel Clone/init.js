let cellsContentDiv = document.querySelector('.cellsContent') 
let visitedCells;

function initCells(){
    let cellsContent = "<div class = 'topLeftCell' > </div>";

    //topRow
    cellsContent+="<div class = 'topRow'>"
    for(let i = 0; i<26; i++){
        cellsContent+=`<div class = 'topRowCell'> ${String.fromCharCode(65+i)} </div>`;
    }
    cellsContent += "</div>"
    
    // leftColumn
    cellsContent+="<div class = 'leftCol'>"
    for(let i = 0; i<100;i++){
        cellsContent+=`<div class = 'leftColCell'> ${i+1} </div>`
    }
    cellsContent += '</div>'

    cellsContent+= "<div class = 'cells'>"
    //Row
    for(let i = 0; i<100; i++){
        cellsContent += "<div class = 'row'>"
        //Column
        for(let j =  0; j<26; j++){
            cellsContent += `<div class = 'cell' rowId='${i}' colId = '${j}' contentEditable ></div>`
        }
        cellsContent +="</div>"
    }
    cellsContent+="</div>"
    cellsContentDiv.innerHTML = cellsContent;
}

initCells();
let db;
let sheetsDB = [];

function initDB(){
    let newSheetDB = [];
    for(let i = 0; i<100; i++){
        let row = [];
        for(let j = 0; j<26; j++){
            let name = String.fromCharCode(65+j)+(i+1)+"";
            let cellObject = {
                name:name,
                value:"",
                formula:"",
                children: [],
                parent:[],
                visited:false,
                fontStyle:{bold:false,italic:false,underline:false}
            }
            row.push(cellObject)
        }
        newSheetDB.push(row)
    }
    visitedCells = [];
    db = newSheetDB;
    sheetsDB.push({db:newSheetDB,visitedCells:visitedCells});    
    console.log(sheetsDB)
}
initDB();
