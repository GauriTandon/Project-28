class Mango {
    constructor(x,y,radius) {
        var options = {
            'isStatic' : true,
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    
    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);

    }  
}