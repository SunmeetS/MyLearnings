let topRow = document.querySelector('.topRow');
let leftCol = document.querySelector('.leftCol');
let topLeftCell = document.querySelector('.topLeftCell')
let allCells = document.querySelectorAll('.cell');
let addressInput = document.querySelector('#address');
let formulaInput = document.querySelector('#formula');
let lastSelectedCell;


cellsContentDiv.addEventListener('scroll', function (e) {
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    topRow.style.top = scrollFromTop + "px";
    leftCol.style.left = scrollFromLeft + "px";
    topLeftCell.style.top = scrollFromTop + "px";
    topLeftCell.style.left = scrollFromLeft + "px";
})

for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener('click', function (e) {
        let rowId = Number(e.target.getAttribute("rowId"));
        let colId = Number(e.target.getAttribute("colId"));
        let address = String.fromCharCode(65 + colId) + (rowId + 1) + "";
        let cellObject = db[rowId][colId]

        addressInput.value = address;
        formulaInput.value = cellObject.formula


        let bold = document.querySelector(".bold");
        let italic = document.querySelector(".italic");
        let underline = document.querySelector(".underline");
        if(!cellObject.fontStyle.bold){
            bold.style= ""
        }else{
            bold.style.backgroundColor = "darkgrey"
            bold.style.borderRadius = "4px"
        }
        if(!cellObject.fontStyle.italic){
            italic.style= ""
        }else{
            italic.style.backgroundColor = "darkgrey"
            italic.style.borderRadius = "4px"
        }
        if(!cellObject.fontStyle.underline){
            underline.style= ""
        }else{
            underline.style.backgroundColor = "darkgrey"
            underline.style.borderRadius = "4px"
        }
      
        




    })
    allCells[i].addEventListener('blur', function (e) {
        lastSelectedCell = e.target
        let cellValue = e.target.textContent;
        let { rowId, colId } = getRowIdColIdFromElement(e.target);
        let cellObject = db[rowId][colId];
        if (cellObject.value == cellValue) {
            return
        }
        cellObject.value = cellValue;
        console.log('After Update', cellObject)
        updateChildren(cellObject);

        if (cellObject.visited) {
            return;
        }
        cellObject.visited = true;
        visitedCells.push({ "rowId": rowId, "colId": colId });
    })
    allCells[i].addEventListener('keydown', function (e) {
        if (e.key == 'Backspace') {
            let cell = e.target;
            let { rowId, colId } = getRowIdColIdFromElement(cell);
            let cellObject = db[rowId][colId];
            if (cellObject.formula) {
                //update db
                cell.formula = ""
                //update ui
                formulaInput.value = ""
                cell.textContent = "";
                removeFormula(cellObject);
            }
        }
    })
}

formulaInput.addEventListener("blur", function (e) {
    let formula = e.target.value
    if (formula) {
        let { rowId, colId } = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        let computedValue = solveFormula(formula, cellObject);

        // update database
        cellObject.value = computedValue
        cellObject.formula = formula;
        // update ui 
        lastSelectedCell.textContent = computedValue
        updateChildren(cellObject)
    }
})