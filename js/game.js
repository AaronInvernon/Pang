class Game{
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalID = null;
        this.bg = new Background(ctx);
        this.ball = new Ball(ctx);
        this.p1 = new Character(ctx);
        this.img = new Image();
        this.img.src = "images/gameOver.png";
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
        this.ball._draw();
        this.p1._draw();
    }

    _move() {
        this.ball._move();
        this.p1._move();
    }

    _checkCollisions() {
        /* Colision con el personaje */
        const col =  this.ball.collide(this.p1);
    
        if (col) {
          this._gameOver()
        }

        /* Colision con el laser*/
        if (this.p1.arrow) {
          const colBall = this.p1.arrow.collideBall(this.ball);

          if (colBall) {
            this.ball.destroyBall();
          }
        }
    }

    _gameOver() {
        clearInterval(this.intervalId)
      //   this.ctx.fillStyle = "yellow"
      //   this.ctx.font = "80px Roboto";
      //   this.ctx.textAlign = "center";
      //   this.ctx.fillText(
      //     "GAME OVER",
      //     this.ctx.canvas.width / 2,
      //     this.ctx.canvas.height / 2
      //   );
        this.ctx.drawImage(
          this.img,
          this.ctx.canvas.width / 3,
          this.ctx.canvas.height / 3, 
          300, 
          200
        );
    }
}