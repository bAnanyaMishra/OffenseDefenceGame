var canvas
var offence1
var offence2
var defence1
var defence1
var wall1
var wall2
function setup(){
    canvas = createCanvas(900,600)
    offence1=new shoot(40,240)
    offence2=new shoot(850,240)
    defence1=new block(130,200)
    defence2=new block(750,200)
    wall1=new wall(5,0)
    wall2=new wall(875,0)
}

function draw(){
    background(255);
    offence1.display();
    //fill("red");
    offence2.display();
    defence2.display();
    wall1.display();
    wall2.display();
    if(keyIsDown(DOWN_ARROW)){
        offence1.xposition+=5
    }
    
}