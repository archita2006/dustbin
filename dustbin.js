class Dustbin{
constructor(x,y,width,height){
var options={
    isStatic:true,
    restituion:0,
    density:1.0,
    friction:1.0
}
this.body=Bodies.rectangle(x,y,this.width,this.height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
   var pos=this.body.position;
   rect(pos.x, pos.y, this.width, this.height );
    rectMode(CENTER);
  //  fill("red");
    
}

    
}