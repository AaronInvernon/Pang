class Arrow {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.y = y;
        this.x = x;
        this.w = 3;
        this.h = 0;

      }
    
      draw() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(
            this.x, 
            this.y, 
            this.w, 
            this.h -= 20
        )          
      }

      isFinished() {
        return Math.abs(this.h) >= this.y
      }
    
      collideBall(b) {
        
        const colX = this.x + this.w > b.x - b.r && this.x < b.x + b.r ;
        const colY = this.y + this.h < b.y + b.r && this.h < b.y + b.r;
        return colX && colY;
      }
}