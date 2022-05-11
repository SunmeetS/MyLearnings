let inputTag = document.querySelector("input");
let ulTag = document.querySelector("ul");

inputTag.addEventListener("keydown",function(e){
    let key = e.key
    if(key == "Enter"){
        let value = inputTag.value

        inputTag.value = "";
        let liTag = document.createElement("li");
        liTag.innerHTML = `<div>${value}</div>
                            <div class="delete"><i class="fa fa-trash"></i></div>`
        handleDeletion(liTag)
        ulTag.appendChild(liTag)
    }
})

function handleDeletion(liTag){
    let deleteDiv = liTag.querySelector(".delete")
    deleteDiv.addEventListener("click",function(){
        liTag.remove()
    })
}