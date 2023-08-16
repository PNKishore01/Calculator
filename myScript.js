let outputScreen = document.getElementById("result");
function display(num){
    outputScreen.value += num;
}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid , Something went wrong")
    }
}
function Clear(){
    outputScreen.value = "";
}
function Del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}