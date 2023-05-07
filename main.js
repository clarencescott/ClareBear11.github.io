var blink = true;
var speed = 500;

setInterval(() => {
   if(blink) {
     document.getElementById('blink').style.opacity = 0;
     blink = false;
   }else {
     document.getElementById('blink').style.opacity = 1;
     blink = true;
   }
}, speed); 