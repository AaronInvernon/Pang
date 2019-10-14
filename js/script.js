const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const game = new Game(ctx)

const start = document.querySelector("button")
const imgStart = document.getElementById("imgStart")

start.onclick = () => {
    imgStart.classList.add("out")
    canvas.classList.remove("out")
    game.run() 
    start.disabled = true;

}