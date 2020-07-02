class Paper{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            friction:0,
            density:0.8
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
       
        World.add(world,this.body);
        this.image=loadImage("paper.png");
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        //ellipseMode(CENTER);
        fill("purple");
        //ellipse(0,0,30,30);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
      }
};
