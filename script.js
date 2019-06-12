const body = document.querySelector('body')
const canvas = document.createElement('canvas')
body.append(canvas)

canvas.setAttribute('width', '600px')
canvas.setAttribute('height', '600px')

const ctx = canvas.getContext('2d')

function drawRect(x,y,w,h,color = 'black'){
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
}

drawRect(0, 0, 600, 600, '#eee')

drawRect(30, 30, 30, 30)