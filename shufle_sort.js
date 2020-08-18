var mycards = [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var mCards = mycards;
var a1 = document.getElementById("1");
    var a2 = document.getElementById("2");
    var a3 = document.getElementById("3");
    var a4 = document.getElementById("4");
    var a5 = document.getElementById("5");
    var a6 = document.getElementById("6");
    var a7 = document.getElementById("7");
    var a8 = document.getElementById("8");
    var a9 = document.getElementById("9");
    function baseArray(){
        a1.style.order = mCards.indexOf("1");
        a2.style.order = mCards.indexOf("2");
        a3.style.order = mCards.indexOf("3");
        a4.style.order = mCards.indexOf("4");
        a5.style.order = mCards.indexOf("5");
        a6.style.order = mCards.indexOf("6");
        a7.style.order = mCards.indexOf("7");
        a8.style.order = mCards.indexOf("8");
        a9.style.order = mCards.indexOf("9");

    }

function shafleit(){
    mCards = mCards.sort(() => Math.random() - 0.5);
    baseArray();
    
}
function orginalOrder(){
    mCards = mCards.sort(function(a, b){return a-b});
    baseArray();
    
}









