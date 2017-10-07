var speed=10;
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;
function Marquee(){
tab.scrollLeft++;
}

function stop(){
    
}

var MyMar=setInterval(Marquee,speed);
//var my_stop = 
tab.onmouseover=function() {clearInterval(MyMar)};
tab.onmouseout=function() {
    
    
    
    
    MyMar=setInterval(Marquee,speed)};