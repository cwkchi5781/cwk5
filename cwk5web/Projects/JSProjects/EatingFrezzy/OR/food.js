class Food{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = 20;
        this.height = 20;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
    }
    
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "blue";
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();
        console.log("made");
    }
    
    wasEaten(){
        var birdX1 = bird.x;
        var birdX2 = bird.x + bird.width;
        var birdY1 = bird.y;
        var birdY2 = bird.y + bird.height;
        var X2 = this.x + this.width;
        var Y2 = this.y + this.height;
        if( ((this.x > birdX1 && this.x < birdX2) && (this.y < birdY2 && this.y > birdY1)) ||
        ((X2 > birdX1 && X2 < birdX2) && (Y2 < birdY2 && Y2 > birdY1))){
            return true;
        }
        return false;
    }
    
    
    
}