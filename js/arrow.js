class Arrow {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.y = y;
        this.x = x;
        this.w = 3;
        this.h = 0;

      }
    
      draw() {
        this.ctx.fillRect(
            this.x, 
            this.y, 
            this.w, 
            this.h -= 20
        )

        // if(this.h >= this.ctx.canvas.height-this.y){
        //     this.x = 0;
        //     this.y = 0;
        //     this.h = 0;
        // }

        this.ctx.fillStyle = "red"
          
      }

      isFinished() {
        return Math.abs(this.h) >= this.y
      }
    
      
}