let elm = document.getElementById("can");
let con = elm.getContext("2d");

let x = 20;
let y = 20;
let sx = 20;
let sy = 20;
let vx = 2;
let vy = 2;

elm.width = 400;
elm.height = 300;
elm.style.backgroundColor = "#fff";

setInterval( mainLoop, 1000/60 );

function mainLoop() {
    con.clearRect(0,0,400,300);
    x+=vx;
    y+=vy;
    if(x<0 || x+sx>400) vx*=-1;
    if(y<0 || y+sy>300) vy*=-1;

    con.fillStyle = "black";
    con.fillRect(x,y,sx,sy);
}