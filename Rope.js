class Rope{
    constructor(bodyA,pointB){
      var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:1.2,
        length:500
      }
      this.pointB=pointB
      this.rope=Constraint.create(options)
  
      World.add(world, this.rope);
    }
    display(){
        if(this.rope.bodyA){
        
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB
            push()
            strokeWeight(4);
            stroke("grey");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()    
        }
    }
  }