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

const head = {
    x: 4*HEX,
    y: 2*HEX
}

const snake = [
    head,
    {x: 3*HEX, y: 2*HEX},
    {x: 2*HEX, y: 2*HEX},
]

drawRect(0, 0, HEX*20, HEX*20, '#eee')
drawRect(head.x, head.y, HEX, HEX)
drawRect(snake[1].x, snake[1].y, HEX, HEX)
drawRect(snake[2].x, snake[2].y, HEX, HEX)