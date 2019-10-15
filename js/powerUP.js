class PowerUP{
    constructor(ctx, x, y){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.h = 50;
        this.w = 50;

        this.img = new Image();
        this.img.src = "media/images/powerUP.png";
    }

    _draw(){
        this.ctx.drawImage(
          this.img,
          this.x,
          this.y,
          this.w,
          this.h
        );
    }

}