var block1,block2,block3,block4;
var box,edges;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(700,595,500,100);
    block1.shapeColor = rgb(0,0,255);
    block1.scale=0.4;

    block2=createSprite(500,595,500,100);
    block2.shapeColor = rgb(255,128,0);
    block2.scale=0.4;

    block3=createSprite(300,595,500,100);
    block3hapeColor = rgb(153,0,76);
    block3.scale=0.4

    block4=createSprite(100,595,500,100);
    block4.shapeColor = rgb(0,100,0);
    block4.scale=0.4;
    
    //create box sprite and give velocity
    box = createSprite(random(20,40,20,750));
    box.velocityX = 9;
    box.velocityY = 4;
    box.shapeColor = rgb(255,255,255);
    box.scale=0.3;
}

function draw() {

    background(rgb(169,169,169));
    edges =createEdgeSprites ();
    box.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    if(block2.isTouching(box)){
        box.velocityX=0;
        box.velocityY=0;
        box.shapecolor=rgb(255,128,0);
        music.stop();
    }
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapecolor=rgb(0,0,255);
    }
    if(block3.isTouching(box)&& box.bounceOff(block3)){
        box.changeShapecolor=rgb(0,100,0);
    }
    if(block4.isTouching(box)&& box.bounceOff(block4)){
        box.changeShapecolor=rgb(153,0,76);   
    }
    drawSprites();
}


