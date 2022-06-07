let addSheetButton = document.querySelector('.add-sheet');
let sheetId = 0;
let sheetList = document.querySelector('.sheets-list');
let firstSheet = document.querySelector('.sheet');
sheetListener(firstSheet);

addSheetButton.addEventListener('click',function(){
    sheetId++;
    let activeSheet = document.querySelector('.active-sheet')
    activeSheet.classList.remove('active-sheet');
    let sheetDiv = document.createElement('div');
    sheetDiv.classList.add("sheet");
    sheetDiv.classList.add('active-sheet');
    sheetDiv.setAttribute('sheetId',sheetId);
    sheetDiv.innerHTML = `Sheet ${sheetId+1}`
    sheetList.appendChild(sheetDiv)
    sheetListener(sheetDiv);
    initUi();
    initDB();
})

function sheetListener(sheet){
    sheet.addEventListener('click',function(){
        if(sheet.classList.contains('active-sheet')) return;
        let activeSheet = document.querySelector('.active-sheet');
        activeSheet.classList.remove('active-sheet')
        sheet.classList.add("active-sheet");
        let sheetId = sheet.getAttribute("sheetId");
        db = sheetsDB[sheetId]
        setUi();
    })
}

function setUi(){
    for (let i = 0; i<100; i++){
        for(let j = 0; j<26; j++){
            let cell = document.querySelector(`div[rowId="${i}"][colId="${j}"]`)
            let cellObject = db[i][j];
            cell.innerHTML = cellObject.value;
        }
    }
}

function initUi(){
    for (let i = 0; i<100; i++){
        for(let j=0;j<26;j++){
            let cell = document.querySelector(`div[rowid="${i}"][colid="${j}"]`);
            cell.innerHTML = "";
        }
    }
}