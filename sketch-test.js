let degree = 0;
function setup()
{
    createCanvas(800, 800,WEBGL);
}  
function draw()
{
    background('black');
    fill('lightblue');
    rotateX(degree);
    rotateY(degree);
    rotateZ(degree);
    noStroke();
    torus(100,40);
    degree += 0.03;
}