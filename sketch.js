var garden,rabbit;
var gardenImg,rabbitImg;
var apple , appleImage
var leaf , leafImage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  //load image for apple 
  appleImage = loadImage("apple.png")

  //load image for leaf 
  leafImage = loadImage("orangeLeaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
var rand = Math.round(random(50,350));
console.log(rand);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

createApples();
createOrangeLeaves()

  drawSprites()
}

  //create a function to create apples 
  function createApples(){
    if(frameCount%80 === 0){
  
        
        var apple = createSprite(random(50,350),40,10,10,)
        //add image for apple
        apple.addImage("apple", appleImage)
        apple.scale = 0.05
        apple.velocityY = 3
      }
  
  
  }
  
  function createOrangeLeaves(){

    if(frameCount%60 === 0){
    var leaf = createSprite(random(50,350),40,10,10,)
    //add image for leaf 
    leaf.addImage("leaf", leafImage)
    leaf.scale = 0.05
    leaf.velocityY = 4


    }
  }







