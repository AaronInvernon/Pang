class Ball {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 200;
        this.y = 200;
        this.r = 40;

        this.vx = 1;
        this.vy = 0;
        this.ay = 0.3;
    
        this.color = "white"
    }
    
    _draw() {
        this.ctx.fillStyle = this.color

        this.ctx.beginPath();
        this.ctx.arc(
            this.x,
            this.y,
            this.r,
            0,
            2 * Math.PI
        );
        this.ctx.fill();
        this.ctx.closePath();
    }

    _move() {
        this.vy += this.ay;
        this.x += this.vx;
        this.y += this.vy;

        this._checkCollisions()
    }

    _checkCollisions() {
        if (this.x + this.r >= this.ctx.canvas.width) {
          this.vx *= -1
        }
    
        if (this.x - this.r <= 0) {
          this.vx *= -1
        }
    
        if (this.y + this.r >= this.ctx.canvas.height) {
          this.vy *= -1
          this.y = this.ctx.canvas.height - this.r
        }
      }
}