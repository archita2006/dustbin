class Paper{
    
constructor(x,y,radius){
var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

}
 this.body=Bodies.circle(x,y,radius,options);
 this.r=radius;
World.add(world,this.body);

}
display(){
    var pos =this.body.position;
    ellipse(pos.x,pos.y,this.r);
    ellipseMode(RADIUS);
    fill("blue");
   
}
}









