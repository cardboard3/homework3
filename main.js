const origArray = [2,3,4];
let outArray = origArray;


window.addEventListener('DOMContentLoaded', (event) => {
WriteToText()
button2.addEventListener("click", anonymousFunction);
button3.addEventListener("click", ButtonScript3);

});

function ButtonScript1(){
    outArray = origArray.map(x => x ** 2);
    WriteToText()
}
let anonymousFunction = function(){
    outArray = origArray.map(x => x ** 3);
    WriteToText()
};
function ButtonScript3(){
    outArray = origArray.map(x => x ** 4);
    WriteToText()
}
function WriteToText(){
    document.getElementById("textbox1").setAttribute("value",outArray[0]);
    document.getElementById("textbox2").setAttribute("value",outArray[1]);
    document.getElementById("textbox3").setAttribute("value",outArray[2]);
}



