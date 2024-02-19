
let ul = document.querySelector("ul");
let input = document.querySelector("input");
// let button = document.querySelector("button");
let button = document.getElementById("btnAdd")

input.focus();

button.addEventListener('click', addNode);

function addNode(){
    
    let inputVal = input.value;
    input.value = " ";

    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    let newButton = document.createElement("button");

    newSpan.textContent = inputVal;
    newButton.textContent = "Delete";

    newLi.append(newSpan);
    newLi.append(newButton);

    ul.append(newLi);

    newButton.addEventListener('click', () => {
        newLi.remove()
    })

}