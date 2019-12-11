window.addEventListener('load', function(){
    console.log('document ready');
    drawCanvas();
});
function drawCanvas(){
    console.log('start draw to canvas');
    var canvas=document.getElementById('rank')
    console.log('canvas', canvas)

    var ctx = canvas.getContext('2d');
    console.log('ctx', ctx);

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(25,300); //titik awal
    ctx.lineTo(500-5,300); //titik akhir
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(40,310);
    ctx.lineTo(40,15);
    ctx.stroke();

    ctx.fillStyle = 'black';
    ctx.fillText('0',20,290);
    ctx.fillText('50',20,200);
    ctx.fillText('100',20,110);
    ctx.fillText('150',20,20);
    

    ctx.fillStyle = 'blue';
    ctx.fillRect(50,100,50,200);
    ctx.fillText('Jatim Park 3',50,315);

    ctx.fillStyle = 'red';
    ctx.fillRect(130,150,50,150);
    ctx.fillText('Selecta',140,315)

    ctx.fillStyle = 'green';
    ctx.fillRect(210,130,50,170);
    ctx.fillText('MNP',220,315)

    ctx.fillStyle = 'turquoise';
    ctx.fillRect(290,200,50,99);
    ctx.fillText('Jatim Park 2',290,315);

    ctx.fillStyle = 'magenta';
    ctx.fillRect(370,210,50,89);
    ctx.fillText('Hawai',380,315);
}