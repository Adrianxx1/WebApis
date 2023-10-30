const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let idX = 10;
let idY = 10;

let directionX = 1;
let directionY = 1;

let color = 0;

function pelota(x, y) {
    ctx.fillStyle = `hsl(${color}, 50%, 50%)`;
    color += 5;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
    //ctx.stroke();
}

function cuadro(x, y) {
    ctx.fillStyle = `hsl(${color}, 50%, 50%)`;
    color++;
    ctx.fillRect(x, y, 30, 30)
}

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    //pelota(idX, idY);
    cuadro(idX, idY);
    if (directionX === 1 && directionY === 1) {
        idX += 5;
        idY += 5;
    } else if (directionX === 2 && directionY === 1) {
        idX -= 5;
        idY += 5;
    } else if (directionX === 1 && directionY === 2) {
        idX += 5;
        idY -= 5;
    } else {
        idX -= 5;
        idY -= 5;
    }
    if (idX > 650) directionX = 2;
    if (idX < 10) directionX = 1;
    if (idY > 400) directionY = 2;
    if (idY < 10) directionY = 1;
}, 10);