class  Wall{
    constructor(x,y,width,height){
        this.x = this.x;
        this.y = this.y;
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body); 
    }
    
    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y,this.width, this.height);
    }
}
