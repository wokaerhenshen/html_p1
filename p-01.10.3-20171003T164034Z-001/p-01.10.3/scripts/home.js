var speed=10;
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;
var counter = 0;

function Marquee(){
  if(tab2.offsetWidth-tab.scrollLeft<=0)
    {tab.scrollLeft-=tab1.offsetWidth;}
    
else{tab.scrollLeft++;
   
    }

}

var MyMar=setInterval(Marquee,speed);
setTimeout(function(){clearInterval(MyMar)};,200000);
//setTimeout(clearInterval(MyMar),3000);


//setTimeout(Marquee(),5000);
//for (i = 1;i<=100;++i){
  //  setDelay(i);
//}

//function setDelay(i){
//  setTimeout(Marquee,i);
//}

//var MyMar=setInterval(Marquee,speed);
//var my_stop = 
