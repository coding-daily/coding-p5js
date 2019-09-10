
/*
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

*/



let bubbles = [];
function setup()
{
    createCanvas(800,500);
}
function mousePressed()
{
    let r = random(10,50);
    let b = new bubble(mouseX,mouseY,r);
    bubbles.push(b);
}

function draw()
{
    background(0);
    for(let i = 0; i < bubbles.length; i++)
    {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class bubble
{
    constructor(x,y,r)
    {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    move()
    {
        this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5);
        this.r = this.r + random(-2,2);
    }
    show()
    {
        //stroke(255);
        //strokeWeight(4);
        fill(random(240),random(240),210);
        //noFill();
        ellipse(this.x,this.y,this.r * 2);
    }
}



/*

var bubble = {
    x : 50,
    y : 50,

     move : function(){
         this.x = this.x + random(-5,5);
         this.y = this.y + random(-5,5);
         stroke(207,48,48);
         fill(random(240),random(240),210);
         ellipse(this.x,this.y,30,30);
     },

     display : function(){
         for(this.x = 50;this.x <= mouseX - 30;this.x += 62){
            stroke(207,48,48);
            fill(random(255),random(255),120);
         }
         for(this.y = 50;this.y <= mouseY - 30;this.y += 60){
            ellipse(this.x,this.y,30,30);
         }
     }
}

function setup(){
    createCanvas(600,400);
}
function draw(){
    background(17,20,76);
    bubble.move();
    bubble.display();
}

*/