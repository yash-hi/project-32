  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Constraint = Matter.Constraint;
  
  var canon;
  var engine,world;
  var platform1,platform2;
  var ground1,ground2;
  var ball;
  var bg;
  var rope;
  var score=0;

  function preload(){
  bg=loadImage("bg.jpg");
  }

  function setup() {
  createCanvas(1300,600);
  engine=Engine.create();
  world=engine.world;
  // making canon
  canon= new Canon(120,320,200,200);
  //making ground
  ground1 = new Ground(150,590,300,20);
  ground2 = new Ground(900,590,500,20)
  //making platform
  platform1 = new Ground(150, 500, 300, 170);
  platform2 = new Ground(900, 500, 500, 400);
  //making ball
  ball = new canonBall(200,255,60,60)
  //making sling
  rope = new Rope(ball.body, {x: 200, y: 250})
  //making boxes
  box1 = new Box(690,100,45,45);
  box2 = new Box(740,100,45,45);
  box3 = new Box(790,100,45,45);
  box4 = new Box(840,100,45,45);
  box5 = new Box(890,100,45,45);
  box6 = new Box(940,100,45,45);
  box7 = new Box(990,100,45,45);
  box8 = new Box(1040,100,45,45);
  box9 = new Box(1090,100,45,45);
  box10 = new Box(740,50,45,45);
  box11 = new Box(790,50,45,45);
  box12 = new Box(840,50,45,45);
  box13 = new Box(890,50,45,45);
  box14 = new Box(940,50,45,45);
  box15 = new Box(990,50,45,45);
  box16 = new Box(1040,50,45,45);
  box17 = new Box(790,10,45,45);
  box18 = new Box(840,10,45,45)
  box19 = new Box(890,10,45,45);
  box20 = new Box(940,10,45,45);
  box21 = new Box(990,10,45,45);
  box22 = new Box(840,10,45,45);
  box23 = new Box(890,10,45,45);
  box24 = new Box(940,10,45,45);
  box25 = new Box(890,10,45,45);

  Engine.run(engine);
  }

  function draw() {
  background(bg);  
  canon.display();
  platform1.display();
  platform2.display();
  ground1.display();
  ground2.display();
  ball.display();
  rope.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  drawSprites();
  }

  function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
  rope.fly();
  }

  function keyPressed(){
    if(keyCode===32){
    rope.attach(ball.body);
    }}