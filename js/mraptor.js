var context;
var g = 50;

function grid() {
	var w = canvas.width;
	var h = canvas.height;
	for (var i = g; i < h; i = i + g) {
		context.setLineDash([5]);
		context.moveTo(0, i);
		context.lineTo(w, i);
		context.strokeStyle = "gray";
		context.lineWidth = 1;
		context.stroke();
	}
	for (var i = g; i < w; i = i + g) {	
		context.setLineDash([5]);
		context.moveTo(i, 0);
		context.lineTo(i, h);
		context.strokeStyle = "gray";
		context.lineWidth = 1;
		context.stroke();
	}
}

function resize() {
	canvas.width = window.innerWidth - 100;
	canvas.height = window.innerHeight - 212;
}

function init() {
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	resize();
	grid();
}

$(document).ready(init);

$(window).resize(resize);