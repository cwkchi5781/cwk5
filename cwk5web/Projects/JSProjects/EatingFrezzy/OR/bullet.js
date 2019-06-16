class Bullet {
    constructor(canvas, ctx, direction){
        this.canvas = canvas;
        this.ctx = ctx;
        this.direction = direction;
        this.x = 0;
        this.y = 0;
        this.width = 10;
        this.height = 10;
        this.visible = false;
    }
    
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();
    }
    
    move(){
        if (this.direction == "up") {
            this.y -= 4;
        }
        if (this.direction == "down") {
            this.y += 4;
        }
        if (this.direction == "left") {
            this.x -= 4;
        }
        if (this.direction == "right") {
            this.x += 4;
        }
    }
    
    check(){
        if(this.x < 0 || this.x > this.canvas.width || this.y < 0 || this.y > this.canvas.height){
            this.visible = false;
        }
    }
    
    refresh(){
        if(this.visible == true){
            this.draw();
            this.move();
            this.check();
        }
        
    }
}