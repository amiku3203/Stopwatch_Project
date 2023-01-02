
// fetching all id 
const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');
const sec1=document.getElementById('sec1');
const sec2=document.getElementById('sec2');
const min1=document.getElementById('min1');
const min2=document.getElementById('min2');
const hour1=document.getElementById('hour1');
const hour2=document.getElementById('hour2');


//variable for clear interval
var id;

//variable for second minut and hour
var i=0;
 
 var x=1;
 var y=1;
 var z=1;
 var m1=1;
 var m2=1;

 //opreation on start button
start.addEventListener('click',function(){
    id=setInterval(() => {
       sec1.textContent=i;
          if(i==10){
            sec1.textContent=0;
            i=0;
         sec2.textContent=x;
         x++;
          }
          if(x==6){
             min1.textContent=y;
             sec2.textContent=0;
             x=0;
             y++;
          }
          if(y==10){
            min2.textContent=z;
            min1.textContent=0;
            y=0;
            z++;
          }
          if(z==6){
            hour1.textContent=m1;
            min2.textContent=0;
            z=0;
            m1++;
          }
         if(m1==10){
            hour2.textContent=m2;
            hour1.textContent=0;
            m2++;
            m1=0;
         }
         if(m2==10){
            return;
         }

       i++;
     }, 1000);

});
 

//opreation on stop button
stop.addEventListener('click',function(){
    clearInterval(id);
})

//opreation on rest button
reset.addEventListener('click',function(){
 sec1.textContent=0;
 sec2.textContent=0;
 min1.textContent=0;
 min2.textContent=0;
 hour1.textContent=0;
 hour2.textContent=0;
 i=0;
 x=0;
 y=0;
 z=0;
 m1=0;
 m2=0;
})