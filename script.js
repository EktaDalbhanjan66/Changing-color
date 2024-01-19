
const randomColor=function(){
    let hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];

    }
    return color;

}
let interval;
const startcolor=function(){
    if(!interval){
     interval=setInterval(changBgColor,1000);
    }
     function changBgColor(){
         document.body.style.backgroundColor=randomColor();
     }
 
  }
  const stopcolor=function(){
    clearInterval(interval);
    interval=null;
    document.body.style.backgroundColor=' rgb(44, 36, 36)'


 }
document.querySelector('#start').addEventListener('click',startcolor);
document.querySelector('#stop').addEventListener('click',stopcolor);


