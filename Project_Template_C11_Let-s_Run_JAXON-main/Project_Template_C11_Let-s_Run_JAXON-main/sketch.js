var road;
var runner;
var invisibleBoundaryR;invisibleBoundaryL;
var edges;

function preload(){
  //pre-load images
path_bg=loadImage("path.png");
boy= loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(1200,600);
  //create sprites here
  road= createSprite(200,200);
  road.addImage(path_bg);
  road.x = road.height /2;
  road.velocityY= 4;
  road.scale=1.2;

  runner= createSprite(500,10,20,30);
  runner.addAnimation("lets_run",boy);
  runner.scale=0.2;

  invisibleBoundaryL = createSprite(100,200,100,80);
  invisibleBoundaryL.visible = false;
 
  invisibleBoundaryR = createSprite(200,200,100,80);
  invisibleBoundaryR.visible = false;
  
}

function draw() {
  background("black");

  if(keyDown("left")&& runner.x >= 100) {
    runner.velocityX=-10;
  }
  if(keyDown("right")&& runner.x >= 100){
    runner.velocityX=10;
  }
  
  edges= createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(invisibleBoundaryL);
  runner.collide(invisibleBoundaryR);

  if(road.y<800) {
   
    road.y= road.height/2;

  }


  drawSprites();

}
