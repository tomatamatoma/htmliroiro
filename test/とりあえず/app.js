let elm = document.getElementById("can");
let con = elm.getContext("2d");

elm.width = 800;
elm.height = 500;
elm.style.backgroundColor = "yellow";

class SIKAKU {
    constructor(x, y, sx, sy, vx, vy) {
        this.x = x;
        this.y = y;
        this.sx = sx;
        this.sy = sy;
        this.vx = vx;
        this.vy = vy;
    }

    hyouzi() {
        con.fillStyle = "red";
        con.fillRect(this.x,this.y,this.sx,this.sy);
    }

    ugoku() {
        // con.clearRect(0, 0, 800, 500);
        this.x += 100;
        con.fillRect(this.x,this.y,this.sx,this.sy);
    }
}

const sikaku = [];
for(let i=0; i<10; i++) {
    sikaku.push(new SIKAKU(40*i,40*i,20,20,2,2));
    sikaku[i].hyouzi();
    // sikaku[i].ugoku();
}



// con.fillStyle = "white";
// con.fillRect(20,20,50,50);

// setInterval( mainLoop, 1000/60);

// function mainLoop() {
    
//     con.clearRect(0,0,800,500);
//     if(x<0 || x+sx>800) vx*=-1;
//     if(y<0 || y+sy>500) vy*=-1;

//     x+=vx;
//     y+=vy;

//     con.fillStyle = "yellow";
//     con.fillRect(x,y,sx,sy);

// }

