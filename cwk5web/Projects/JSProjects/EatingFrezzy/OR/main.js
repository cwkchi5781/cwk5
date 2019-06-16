var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var bird = new Bird(canvas, ctx);
bird.HookEvents(this.document);

var birdFood = new Food(canvas, ctx);
birdFood.draw();


function RefreshScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.Refresh();
    
}

setInterval(RefreshScreen, 10);
