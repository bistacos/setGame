// initializing a canvas
var canvas = document.createElement('canvas');
var width = 600;
var height = 400;
canvas.width = width;
canvas.height = height;
context = canvas.getContext('2d');
context.fillstyle = "#333333";
context.fillRect(0, 0, width, height);

document.body.appendChild(canvas);
