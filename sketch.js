const Engine =Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var coverimg;
var tank1;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var x,y = 100;

function preload(){
  coverimg = loadImage("Cover.png");
  backImg = loadImage("desert.jpg");
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  createCanvas(1500,750);
  tank1 = createSprite(100,100,50,50);

  wall1 = new Wall(800,220,400,10);
  wall2 = new Wall(600,275,10,120);
  wall3 = new Wall(800,325,120,10);
  wall4 = new Wall(860,495,10,350);
  wall5 = new Wall(740,500,10,120);
  wall6 = new Wall(570,555,350,10);
  wall7 = new Wall(545,450,120,10);
  wall8 = new Wall(485,280,10,350);
  wall9 = new Wall(740,110,525,10);
  wall10 = new Wall(1000,165,10,120);
  wall11 = new Wall(930,675,150,10);
  wall12 = new Wall(1000,450,10,450);
  wall13 = new Wall(400,615,10,130);
  wall14 = new Wall(625,675,460,10);
  wall15 = new Wall(445,110,100,10);
  wall16 = new Wall(400,340,10,450);
  wall17 = new Wall(940,700,1100,10);
  wall18 = new Wall(1485,385,10,620);
  wall19 = new Wall(940,80,1100,10);
}
function draw(){
background(backImg);


y = y + 200;

x = displayWidth - tank1.x;

if(keyIsDown(UP_ARROW)){
  tank1.y -= 5 ;
}
if(keyIsDown(DOWN_ARROW)){
  tank1.y += 5 ;
}
if(keyIsDown(RIGHT_ARROW)){
  tank1.x += 5 ;
}
if(keyIsDown(LEFT_ARROW)){
  tank1.x -= 5 ;
}

wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();
wall7.display();
wall8.display();
wall9.display();
wall10.display();
wall12.display();
wall11.display();
wall13.display();
wall14.display();
wall15.display();
wall16.display();
wall17.display();
wall18.display();
wall19.display();
tank1.display();
	
drawSprites();


}
