const SCREEN_W = 800;
const SCREEN_H = 500;


let elm = document.getElementById("can");
let con = elm.getContext("2d");

let x = 100;
let y = 200;
let sx= 30;
let sy = 20;
let vx= 2;
let vy= 4;
elm.width = SCREEN_W;
elm.height = SCREEN_H;
elm.style.backgroundColor= "red";

setInterval( main, 1000/60 );

function main()
{
	con.clearRect(0,0,SCREEN_W,SCREEN_H);

	x+=vx;
	y+=vy;
	
	if( x<=0 || x+sx>=SCREEN_W ) vx*=-1;
	if( y<=0 || y+sy>=SCREEN_H ) vy*=-1;

	con.fillStyle="yellow";
	con.fillRect( x, y, sx, sy );


}