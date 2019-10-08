const ctx = document.getElementById('canvas').getContext('2d')

const game = new Game(ctx)

const start = document.querySelector("button")

start.onclick = () => {
    game.run() 
    start .disabled = true;
}