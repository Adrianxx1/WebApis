const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');



ctx.strokeRect(100, 100, 200, 200); 


ctx.beginPath();
ctx.arc(160, 160, 25, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath();
ctx.arc(240, 160, 25, 0, Math.PI * 2, true);
ctx.stroke();
ctx.strokeRect(190, 100, 20, 60); 
ctx.strokeRect(170, 110, 20, 20); 
ctx.strokeRect(210, 110, 20, 20);
ctx.strokeRect(190, 200, 20, 20);// Nariz
ctx.strokeRect(190, 200, 30, 10);// Nariz
ctx.strokeRect(170, 200, 30, 10);// Nariz
ctx.strokeRect(150, 250, 100, 20); //Boca
ctx.strokeRect(190, 250,  10, 10);
ctx.strokeRect(210, 250,  10, 10);
ctx.strokeRect(150, 260,  20, 10);
ctx.strokeRect(229, 260,  20, 10);
ctx.strokeRect(150, 250,  10, 10);
ctx.strokeRect(240, 250,  10, 10);

ctx.fillStyle = 'black';
ctx.fillRect(150, 250,  10, 10);
ctx.fillRect(240, 250,  10, 10);
ctx.fillRect(190, 250,  10, 10);
ctx.fillRect(210, 250,  10, 10);
ctx.fillRect(150, 260,  20, 10);
ctx.fillRect(229, 260,  20, 10);

ctx.fillStyle = "pink";
ctx.fillRect(190, 100, 20, 60); 
ctx.fillRect(170, 110, 20, 20); 
ctx.fillRect(210, 110, 20, 20);

ctx.fillStyle = "orange";
ctx.fillRect(190, 200, 20, 20);
ctx.fillRect(190, 200, 30, 10);
ctx.fillRect(170, 200, 30, 10);
