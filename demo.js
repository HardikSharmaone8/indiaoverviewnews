var element;

element = document
    .getElementById("size")
    .setAttribute("style", "border : 10px solid red;");

//document.getElementById("size").setAttribute("class", "newsize");
document.getElementById("size").attributes[1].value = "newsize";