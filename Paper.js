class Paper{
constructor(x,y,r){
var options= {
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
this.paper=loadImage("paper.png")
this.body=Bodies.circle(x,y,r, options)
World.add(world,this.body)
this.r=r;

}
display(){
var pos=this.body.position
push();
translate(pos.x,pos.y)
imageMode(CENTER)
image(this.paper,0,0,this.r*3,this.r*3)




pop();
}

}