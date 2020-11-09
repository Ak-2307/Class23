class Box{
    constructor(x,y,width,height)
    {
        var body_options ={
            restitution: 1.0,
            friction: 1.2,
            density: 0.5,
            isStatic: false
        }
    
        this.body = Bodies.rectangle(x,y,width,height,body_options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
     display(){
         var pos=this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
     }



}