class Umbrella {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("walking_1.png"); 
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,300);
    }

};