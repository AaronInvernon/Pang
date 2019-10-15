const RIGHT_KEY = 39
const LEFT_KEY = 37
const SPACE_KEY = 32

class Character{
    constructor(ctx){
        this.ctx = ctx;
        this.x = this.ctx.canvas.width /2;
        this.y = this.ctx.canvas.height * 0.7;
        this.w = 80;
        this.h = 110;
        this.vx = 0;
        this.tick = 1;
        this.v = 5
        
        this.img = new Image();
        this.img.src = "media/images/sprite.png";
        this.img.frames = 11;
        this.img.frameIndex = 6;
        
        
        this.shootAudio = new Audio('media/sounds/laserShoot.mp3');

        this.arrow = null

        this._setListeners();
    }

    _draw(){
        this.ctx.drawImage(
          this.img,
          this.img.frameIndex * this.img.width / this.img.frames,
          0,
          this.img.width / this.img.frames,
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
            this.vx = this.v
            this.img.frameIndex = 7
            this._animate("right");
          } else if (e.keyCode === LEFT_KEY) {
            this.vx = -this.v
            this.img.frameIndex = 0
            this._animate("left");
          } else if (e.keyCode === SPACE_KEY) {
            this._shoot()
            this.img.frameIndex = 5
          } 
        }

        document.onkeyup = (e) => {
             if (e.keyCode === RIGHT_KEY) {
              this.vx = 0
              this.img.frameIndex = 6
            } else if (e.keyCode === LEFT_KEY) {
              this.vx = 0
              this.img.frameIndex = 6
            } else if (e.keyCode === SPACE_KEY) {
              this.img.frameIndex = 4
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
      this.shootAudio.pause();
      this.shootAudio.play();
        this.arrow = new Arrow(
            this.ctx, 
            this.x + this.w / 2.7, 
            this.y
        )   
    }

    _animate(dir) {
      
      this.tick++;
      if (dir === "left"){
        if (this.tick >= 3) {
          this.img.frameIndex = 2
          setTimeout(()=> {
            this.tick = 0
          }, 300)
        } 
      } else {
        if (this.tick >= 3) {
          this.img.frameIndex = 9
          setTimeout(()=> {
            this.tick = 0
          }, 300)
      }
    }
    }
}