class Stone {
    constructor(x,y,radius) {
        var options = {
            restitution : 0,
            friction : 1.0,
            density : 1.2
        }
        
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);    
    }
}