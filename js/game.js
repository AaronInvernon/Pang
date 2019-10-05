class Game{
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalID = null;
        this.bg = new Background(ctx);
        this.p1 = new Character(ctx);
        this.img = new Image();
        this.img.src = "images/gameOver.png";
        this.imgW = new Image();
        this.imgW.src = "images/win.png";
        this.bX = this.ctx.canvas.width / 2;
        this.bY = 50;
        this.bR =  50;
        this.balls = [new Ball(ctx, this.bX, this.bY, this.bR,1)]
    }

    run() {
        this.intervalId = setInterval(() => {
          this._clear();
          this._draw();
          this._move();
          this._checkCollisions(); 
        }, 1000 / 60)
     }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width,
            this.ctx.canvas.height);
    }

    _draw() {
      this.bg._draw();
      this.p1._draw();
      this.balls.forEach(b => b._draw())
    }

    _move() {
      this.balls.forEach(b => b._move())
      this.p1._move();
      this.win()
    }

    _checkCollisions() {
        /* Colision con el personaje */
        this.balls.forEach(b => {
          if (b.collide(this.p1)) {
            this._gameOver()
          }
        })

        /* Colision con el laser*/
        if (this.p1.arrow) {
          this.balls.forEach(b =>{
            if (this.p1.arrow.collideBall(b)) {
              this.destroyBall(b);
            }
          })

        }
    }

    _gameOver() {
        clearInterval(this.intervalId)
        this.ctx.drawImage(
          this.img,
          this.ctx.canvas.width / 5,
          this.ctx.canvas.height / 5, 
          500, 
          300
        );
    }

    destroyBall(b){

      if(this.p1.arrow) {
        this.p1.arrow = null;   
      }

      if(b.r >= 20){
        this.balls.push(
          new Ball(
            this.ctx,
            b.x,
            b.y,
            b.r * 0.6,
            b.vx*-1.5
          ),
          new Ball(
            this.ctx,
            b.x,
            b.y,
            b.r * 0.6,
            b.vx
          )
        )
      }
      const ball = this.balls.indexOf(b);
      this.balls.splice(ball, ball+1)
    }

    win(){
      if(this.balls.length === 0){
        clearInterval(this.intervalId)
        this.ctx.drawImage(
          this.imgW,
          this.ctx.canvas.width / 7,
          this.ctx.canvas.height / 8, 
          600, 
          400
        );
      }
  }


}