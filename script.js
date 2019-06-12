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

head = snake[0]
let lastPart = snake.pop()
lastPart.x = head.x + HEX
lastPart.y = head.y
snake.unshift(lastPart)

console.log(snake)

drawRect(0, 0, 20*HEX, 20*HEX, '#eee')
snake.forEach(part =>
    drawRect(part.x, part.y, HEX, HEX)
    )