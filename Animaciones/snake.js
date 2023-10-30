const lienzo = document.querySelector('#lienzo');
const body = document.querySelector('body');
const ctx = lienzo.getContext('2d');

let direction = 1; // Right, Down, Left, up

let posx = 2;
let posy = 1;

const snake = [];
snake.push({
    x: 2,
    y: 1,
    xNext: 0,
    yNext: 0,
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('❎', this.x * 20, this.y * 20);
    }
});
snake.push({...snake[0]})
snake[1].x = 1;
snake[1].xNext = snake[0].x;
snake[1].yNext = snake[0].y;
snake.push({...snake[0]})
snake[2].x = 0;
snake[2].xNext = snake[1].x;
snake[2].yNext = snake[1].y;

function nextMove(){
    snake.forEach((cuadrito, index) => {
        if(index === 0){
            cuadrito.x = posx;
            cuadrito.y = posy;
        } else {
            cuadrito.x = cuadrito.xNext;
            cuadrito.y = cuadrito.yNext;
            cuadrito.xNext = snake[index - 1].x;
            cuadrito.yNext = snake[index - 1].y;
        }
    })
}

const comida = {
    x: 0,
    y: 0,
    aparece: function(){
        this.x = Math.floor(Math.random() * 32);
        this.y = Math.floor(Math.random() * 19) + 1;
    },
    pinta: function(){
        ctx.fillText('🐁', this.x * 20, this.y * 20);
    }
}
comida.aparece();
setInterval(() => {
    ctx.clearRect(0, 0, 640, 400);
    snake.forEach(item => item.pinta());
    comida.pinta();
    nextMove();
    if(posx === comida.x && posy === comida.y){
        const newItem = {...snake[1] }
        newItem.x = comida.x;
        newItem.y = comida.y;
        snake.push(newItem);
        comida.aparece();
    }
    switch(direction){
        case 1:
            posx++;
            break;
        case 2:
            posy++;
            break;
        case 3:
            posx--;
            break;
        case 4:
            posy--;
            break;           
    }
    if(posx > 32) posx = 0;
    if(posx < 0) posx = 32;
    if(posy > 20) posy = 0;
    if(posy < 0) posy = 19;
}, 150);
snake.forEach(item => item.pinta());

body.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'ArrowRight':
            direction = 1;
            break;
        case 'ArrowDown':
            direction = 2;
            break;
        case 'ArrowLeft':
            direction = 3;
            break;
        case 'ArrowUp':
            direction = 4;
            break;
    }
});