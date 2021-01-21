class Monster{

    constructor(x,y){
  
     var options = {
  
       density : 0.04,
       friction : 1,
       isStatic : true,
       restitution : 1
  
     }
  
     this.radius = 400;
     this.body = Bodies.circle(x,y,400,options);
     
     this.image = loadImage("Monster-01.png");
     this.img = loadImage("Monster-02.png");
     
     World.add(myWorld,this.body);
  
    }
  
  display(){
  

  var pos = this.body.position
  
  ellipseMode(RADIUS);
  imageMode(CENTER);
  image(this.image,pos.x,pos.y,400,400);

  
  }
  
  }
  