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

let snake = [
    head,
    {x: 3*HEX, y: 2*HEX},
    {x: 2*HEX, y: 2*HEX},
]

let timeout = 300

snake.forEach(part =>
    drawRect(part.x, part.y, HEX, HEX)
    )

function moveSnake(){

    const head = {
        x: snake[0].x + HEX * dx,
        y: snake[0].y + HEX * dy
    }

    snake.unshift(head)

    if (food.x === head.x && food.y === head.y){
        createFood()
        loop()
    }else{
        snake.pop()
    }
}

function cleanCanvas(){
    drawRect(0, 0, 20*HEX, 20*HEX, '#eee')
}

function paintSnake(){
    snake.forEach(part =>
        drawRect(part.x, part.y, HEX, HEX)
    )
}

let food
let intervalID

function paintFood() {
    drawRect(food.x, food.y, HEX, HEX, 'red')
}

createFood()

function loop (){
    
    if (intervalID !== undefined){
        clearInterval(intervalID)
        timeout -= 50
        console.log(timeout)
    }

    intervalID = setInterval(() =>{

    moveSnake()

    if (checkForCollision()) {

        intervalID = 300
        resetGame()

    }

    cleanCanvas()

    paintFood()

    paintSnake()

}, timeout)}

loop()
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

function randomNumber(min, max) {
    return Math.round((Math.random() * (max-min) + min) / HEX) * HEX;
  }

function createFood() {
    const x = randomNumber(0, 600-HEX)
    const y = randomNumber(0, 600-HEX)

    const canDrawFood = !snake.some(part =>{
        return part.x === x && part.y === y
    })

    if (!canDrawFood){
        createFood()
    }

    food = {
        x,
        y
    }

}

function checkForCollision() {

    const [head, ...tail] = snake
    const selfEating = tail.some(part => 
        part.x === head.x && part.y === head.y
    )

    const touchingWall = (head.x < 0 || head.y < 0 || head.x > 19 * HEX || head.y > 19*HEX)

    return selfEating || touchingWall

}

function resetGame() {

    snake = [
        {x: 4*HEX, y: 2*HEX},
        {x: 3*HEX, y: 2*HEX},
        {x: 2*HEX, y: 2*HEX},
    ]

    dx = 1
    dy = 0

    createFood()

}
