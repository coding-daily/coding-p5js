let angle = 0;
let X = 100;
let Y = 100;

//let bg = 0;

let str = "ckjbug";

let colorRandom = random(0,255);



function setup(){
    createCanvas(800,400);
    //angleMode(DEGREES);
    //rectMode(CENTER);

    textFont("Libre Caslon Display");

    let locX = random(0,800);
    let locY = random(0,400);
    let s = random(10,50);

    background(252,92,101);
}


function draw(){
// background(0);

// translate(X,Y);
// rotate(angle);
// fill(bg++);
// line();
// rect(20,20,10,10);

// angle = angle + 3;


noStroke();
fill(254,211,48);
triangle(400,0,800,0,800,400);

stroke(0,120);
fill(43,203,186);
triangle(800,0,800,400,400,400);
noLoop();

textSize(36);
text(str,100,100);

textSize(24);
text("ckjbug@qq.com",100,150);

Stroke(0);
fill(colorRandom);
square(locX,locY,s);

}

