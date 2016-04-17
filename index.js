/*
EaselJs - Math Animation
*/
var canvas;
var stage;
var shape;
var centerX;
var centerY;

function ship() {
	var ship = new createjs.Bitmap("https://googledrive.com/host/0B368vPcid_vicGJ4UjU5aE9VTE0/VamtigerProject/Home/Home2/Assets/Images/vamtigerProjectLogoWhiteMIn.svg");

	ship.x = centerX;
	ship.y = centerY;
	ship.regX = 50;
	ship.regY = 50;

	stage.addChild(ship);

	animate(ship);
}

function animate(shape) {
	createjs.Ticker.setFPS(30);

	createjs.Ticker.on("tick", function () {
		/*
		shape.x = centerX + (Math.random() - 0.5) * 5; // shake
		shape.y = centerY + (Math.random() - 0.5) * 5;
		*/

		shape.x = centerX + (Math.sin(createjs.Ticker.getTicks()/20)*100); // smooth shake
		shape.y = centerY + (Math.cos(createjs.Ticker.getTicks()/20)*100);

		stage.update();
	});
}

function draw() {
	ship();
}

function setStage() {
	canvas = $("#canvas1")[0];
	canvas.width = 380;
	canvas.height = 480;
	centerX = canvas.width / 2;
	centerY = canvas.height / 2;

	stage = new createjs.Stage(canvas);
};

$(function () {
	setStage();
	draw();
});
