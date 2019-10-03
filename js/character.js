const RIGHT_KEY = 39
const LEFT_KEY = 37
const SPACE_KEY = 32

class Character{
    constructor(ctx){
        this.ctx = ctx;
        this.x = this.ctx.canvas.width * 0.8;
        this.y = this.ctx.canvas.height * 0.8;
        this.w = 80;
        this.h = 110;
        this.vx = 0;

        this.img = new Image();
        this.img.src = "images/sprite.png";
        this.img.frames = 9;
        this.img.frameIndex = 0;

        // this.arrow = [];
        this.arrow = null

        this._setListeners();
    }

    _draw(){
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * this.img.width / 9,
            this.img.height/2,
            this.img.width / 9,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
          );
        
        
        if(this.arrow && this.arrow.isFinished()) {
            this.arrow = null;
        }

        this.arrow && this.arrow.draw()
        
    }

    _move(){
        this.x += this.vx;
        this._limits();
    }

    _setListeners() {
        document.onkeydown = (e) => {
          if (e.keyCode === RIGHT_KEY) {
            this.vx = 5
          } else if (e.keyCode === LEFT_KEY) {
            this.vx = -5
          } else if (e.keyCode === SPACE_KEY) {
            this._shoot()
          } 
        }

        document.onkeyup = (e) => {
             if (e.keyCode === RIGHT_KEY) {
              this.vx = 0
            } else if (e.keyCode === LEFT_KEY) {
              this.vx = 0
            }
          }
    }

    _limits() {
        if(this.x <= 0){
            this.vx = 0
            this.x = 0
          }
      
          if(this.x >= this.ctx.canvas.width - this.w){
            this.vx = 0
            this.x = this.ctx.canvas.width - this.w
          }
      }

    _shoot() {
        this.arrow = new Arrow(
            this.ctx, 
            this.x + this.w / 2.5, 
            this.y
        )
        
    }
}