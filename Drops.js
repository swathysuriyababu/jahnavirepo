class Drops {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.01,
            isStatic:false
        }
        this.r=5;//radius was too big
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        
        pop();
        if(this.body.position.y > height){
//if u dnt include this then there is only one shower of rain
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
};