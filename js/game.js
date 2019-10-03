class Game{
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalID = null;
        this.bg = new Background(ctx);
        this.ball = new Ball(ctx);
        this.p1 = new Character(ctx);
    }

    run() {
        this.intervalId = setInterval(() => {
          this._clear();
          this._draw();
          this._move();
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
}