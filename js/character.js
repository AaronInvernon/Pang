const RIGHT_KEY = 39
const LEFT_KEY = 37

class Character{
    constructor(ctx){
        this.ctx = ctx;
        this.x = this.ctx.canvas.width / 2;
        this.y = this.ctx.canvas.height * 0.9;


    }

    _draw(){}

    _move(){
        this.x += this.vx;
    }

    _setListeners() {
        document.onkeydown = (e) => {
          if (e.keyCode === RIGHT_KEY) {
              alert('derecha')
            this.vx = 5
          } else if (e.keyCode === LEFT_KEY) {
              alert('izquierda')
            this.vx = -5
          } else if (e.keyCode === SPACE_KEY) {
            this._shoot()
          }
        }
    }
}