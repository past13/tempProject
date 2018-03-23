function resizeCanvas() {
    htmlCanvas.width = window.innerWidth;
    htmlCanvas.height = window.innerHeight;
    redraw();
    console.log(htmlCanvas)
}

function redraw() {
    context.strokeStyle = 'blue';
    context.lineWidth = '5';
    context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
}