let elm = document.getElementById("can");
let con = elm.getContext("2d");

let x = 50;
let y = 50;
let sx = 50;
let sy = 50;
let vx = 2;
let vy = 2;


elm.width = 800;
elm.height = 500;
elm.style.backgroundColor = "red";

setInterval( mainLoop, 1000/60);
setInterval( main, 1000/60);


function mainLoop() {
    
    con.clearRect(x,y,sx,sy);
    x += vx;
    y += vy;
    
    if(x<0 || x+sx>800) vx*=-1;
    if(y<0 || y+sy>500) vy*=-1;


    con.fillStyle = "blue";
    con.fillRect(x,y,sx,sy);


    
}



