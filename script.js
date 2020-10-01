var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var main = document.getElementById("list");
var del = document.getElementsByClassName("delete");

// Add event listeners to delete buttons
for(var i = 0; i < del.length; i++){
    del[i].addEventListener("click",removeItem);
}


function removeItem(e){
    e.target.parentNode.remove();
    console.log("removed");
}

// adding new items
function inputLength() {
    if(input.value.length > 0){
        return true;
    }
    return false;
}

function createItem(){
        var li = document.createElement("li");
        var butt = document.createElement("button");
        butt.appendChild(document.createTextNode("X"));
        butt.addEventListener("click", removeItem)
        li.appendChild(document.createTextNode(input.value + " "));
        li.appendChild(butt);
        main.appendChild(li);
        input.value = "";
}

button.addEventListener("click", function(){
    if(inputLength()){
        createItem();
    }
})

input.addEventListener("keypress", function(event) {
    if(inputLength() && event.keyCode === 13){
       createItem(); 
    }})

    // Add event listeners to delete buttons
