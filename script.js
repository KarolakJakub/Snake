const HEX = 30

const body = document.querySelector('body')
const canvas = document.createElement('canvas')
body.append(canvas)

canvas.setAttribute('width', `${20*HEX}px`)
canvas.setAttribute('height', `${20*HEX}px`)

const ctx = canvas.getContext('2d')

const hex = 30

function drawRect(x,y,w,h,color = 'green'){
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
}

drawRect(0, 0, HEX*20, HEX*20, '#eee')

let head = {
    x: 4*HEX,
    y: 2*HEX
}

const snake = [
    head,
    {x: 3*HEX, y: 2*HEX},
    {x: 2*HEX, y: 2*HEX},
]


snake.forEach(part =>
    drawRect(part.x, part.y, HEX, HEX)
    )

function moveSnake(){
    head = snake[0]
    let lastPart = snake.pop()
    lastPart.x = head.x + (dx*HEX)
    lastPart.y = head.y + (dy*HEX)
    snake.unshift(lastPart)
}

function cleanCanvas(){
    drawRect(0, 0, 20*HEX, 20*HEX, '#eee')
}

function paintSnake(){
    snake.forEach(part =>
        drawRect(part.x, part.y, HEX, HEX)
    )
}



setInterval(() =>{

    moveSnake()

    cleanCanvas()

    paintSnake()

}, 200)

let dx = 1
let dy = 0

body.addEventListener('keydown', event => {

    const isMovingRight = dx === 1 && dy === 0
    const isMovingLeft = dx === -1 && dy === 0
    const isMovingDown = dx === 0 && dy === 1
    const isMovingUp = dx === 0 && dy === -1

    if (event.key === 'ArrowRight' && !isMovingLeft){
        dx = 1
        dy = 0
    } else if (event.key === 'ArrowLeft' && !isMovingRight){
        dx = -1
        dy = 0
    } else if (event.key === 'ArrowUp' && !isMovingDown){
        dx = 0
        dy = -1
    } else if (event.key === 'ArrowDown' && !isMovingUp){
        dx = 0
        dy = 1
    }
    console.log(dx+' '+ dy)
})