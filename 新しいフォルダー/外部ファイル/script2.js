

    const SCREEN_W = 800;
    const SCREEN_H = 500;
    let SCREEN_C   = "#888888";

    let px = 0;
    let py = 0;
    let x  = 50;
    let y  = 50;
    let sx = 40;
    let sy = 40;
    let vx = 1;
    let vy = 2;
    let CON_C    = ["red", "white", "blue", "white", "skyblue"];
    let BLOCK_N1 = 5;
    let BLOCK_N2 = 3;
    let dis   = 30;
    let vdis  = 0.11;

    let elm = document.getElementById("cancan");
    let con = elm.getContext("2d");

    elm.width  = SCREEN_W;
    elm.height = SCREEN_H;
    elm.style.backgroundColor = SCREEN_C;



	//1秒間に60回 main() の処理をする
    setInterval(main, 1000 / 60);

    function main() {





	//ブロックがくっつく動きの処理
      if (dis > 0) {
        dis -=  vdis;
      }




	//描画のクリア
      con.clearRect(0, 0, SCREEN_W, SCREEN_H);





	//全ブロックがキャンパス上を動く処理
      x += vx;
      y += vy;





      
	//ブロックを描画する処理
      for (let j = 0; j < BLOCK_N2; j++) {
        
        //ブロックに色をつける処理
        con.fillStyle = CON_C[j % 5];
        
        py = ((sy + dis) * j) + y;

        for (let i = 0; i < BLOCK_N1; i++) {
          //py+=10;
          px = ((sx + dis) * i) + x;
          
         //px,pyはブロックの位置 sx,syはブロックの大きさ
          con.fillRect(px, py, sx, sy);





	//ブロックが壁に跳ね返る処理
          if (px < 0 || px + sx > SCREEN_W) {
            vx *= -1;
          }
          if (py < 0 || py + sy > SCREEN_H) {
            vy *= -1;

          }
        }
      }
    }
