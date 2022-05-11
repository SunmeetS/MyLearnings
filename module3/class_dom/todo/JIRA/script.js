let addButton = document.querySelector(".add")
let taskEditor = document.querySelector(".taskEditor")
let addTaskEditor = true;
let textArea = document.querySelector(".textArea");
let footer = document.querySelector('.footer');

addButton.addEventListener("click",function(){
    if(addTaskEditor){
        taskEditor.style.display = "flex"
    }
    else{
        taskEditor.style.display = "none"
    }
    addTaskEditor =!addTaskEditor
})

taskEditor.addEventListener("keydown",function(e){
    let key = e.key;
    if(key == "Enter"){
        createTicket(textArea.value);
        textArea.value = ""
        taskEditor.style.display = "none"
        addTaskEditor = !addTaskEditor
    }
})

function createTicket(value){
    // <div class="ticketCont">
    //         <div class="ticketColour"></div>
    //         <div class="ticketId"> #abc12 </div>
    //         <div class="taskArea">some task</div>
    //     </div>
    let ticketCont = document.createElement("div")
    ticketCont.setAttribute('class','ticketCont')
    ticketCont.innerHTML = `<div class="ticketColour"></div>
                            <div class = "ticketDiv">
                                <div class="ticketId"> #abc12 </div>
                            </div>
                            <div class="taskArea">${value}</div>`
    footer.appendChild(ticketCont)
}