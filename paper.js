class paper{
   constructor(x,y,r,){
    var options={
        isStatic: false,
        'density':1.2,
      'friction':0,
      'restitution':0.3
    }  
    this.r = r;
  this.y = y;
    this.x = x;
    this.image = loadImage("paper.png");
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    World.add(world, this.body);

   }
   display(){
    var pos = this.body.position;
    //pos.x = mouseX;
    //pos.y = mouseY;
    
    push();
    translate(pos.x, pos.y);
    
   imageMode(CENTER)
    image(this.image,0, 0, this.r,this.r);
    
  
    
    pop();
   }
}