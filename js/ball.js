class Ball {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = this.ctx.canvas.width / 2;
        this.y = 50;
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
    
        if (this.y + this.r >= this.ctx.canvas.height * 0.9) {
          this.vy *= -1
          this.y = this.ctx.canvas.height*0.9 - this.r
        }
    }

    collide(el) {
        const colX = el.x + el.w > this.x + this.r && el.x < this.x + this.r
        const colY = el.y + el.h > this.y + this.r && el.y < this.y + this.r
        
        return colX && colY
    }

    

    destroyBall(){
        this.x = 0;
        this.y = 0;
        this.r = 0;
    }
}