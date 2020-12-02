class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

    this.smokeimage=loadImage("sprites/smoke.png");
    this.trajectory=[]; 
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }
    //this.trajectory = [ [100,100], [105,105], [200,200].....)
    //i                       0          1         2
    
    for(var i=0; i<this.trajectory.length; i=i+1){
      image(this.smokeimage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}