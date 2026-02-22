var input =document.getElementById("input");

function Ac(a){
    input.value = "";
    // console.log("hello" +a)
    
}


function value(a){
    var value = a;
    // input.value = input.value + value;
    input.value += value; 
    console.log(value) 
}
function calc(){
    var ans = eval(input.value)
    input.value =ans;
}
function delet(){
    input.value = input.value.slice(0,-1)
    // console.log(input.value)
}
delet()

