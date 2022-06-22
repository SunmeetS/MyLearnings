let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");

bold.addEventListener("click",function(){
    setFontStyle("bold",bold);
})

italic.addEventListener("click",function(){
    setFontStyle("italic",italic);
})

underline.addEventListener("click",function(){
    setFontStyle("underline",underline);
})

function setFontStyle(styleName,element){
    if(lastSelectedCell){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        
        if(cellObject.fontStyle[styleName]){
            if(styleName == "bold"){
                bold.style.backgroundColor = "white"
                // bold.style.borderRadius = ""
                    lastSelectedCell.style.fontWeight = "normal";
                }
            else if(styleName == "italic"){
                italic.style.backgroundColor = "white"
                    lastSelectedCell.style.fontStyle = "normal";
                }
            else{
                underline.style.backgroundColor = "white"
                    lastSelectedCell.style.textDecoration = "none";
                }
            }
        else{
            
            if(styleName == "bold"){
                bold.style.backgroundColor = "darkgrey"
                bold.style.borderRadius = "4px"
                lastSelectedCell.style.fontWeight = "bold";
                }
            else if(styleName == "italic"){
                    italic.style.backgroundColor = "darkgrey"
                    italic.style.borderRadius = "4px"
                    lastSelectedCell.style.fontStyle = "italic";
                }
            else{
                    underline.style.backgroundColor = "darkgrey"
                    underline.style.borderRadius = "4px"
                    lastSelectedCell.style.textDecoration = "underline";
                }
            }
        cellObject.fontStyle[styleName] = !cellObject.fontStyle[styleName];
    }
}



let inputColor =document.querySelector('.inputColor')
inputColor.addEventListener('click',()=>{
    let input = document.createElement('input')
    input.setAttribute('type','color')
    input.click()

    input.addEventListener('change',(e)=>{
        // console.log(e.currentTarget.val)
        lastSelectedCell.style.backgroundColor =e.currentTarget.value
    })
})


