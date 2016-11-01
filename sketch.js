//NTS:next make words more visible

var i = 1;
var img;

function preload() {
  img = loadImage("./Assets/Unknown.jpg");
}


function setup() {
  createCanvas(800, 800);
  image(img,0,0);
      }

      //text together is better
      function draw() {
        fill(0,0,10,40);
        stroke(0.01);
        fill(10, 1, 200, 10);
        frameRate(10);
        textSize(1 * i);
        i++;
        textFont("SanSeif");
        text("together", 12, 300);
        fill(200, 1, 10, 1);
        textFont("Helvetica");
        text("is", 1, 600);
        textFont("Georgia");
        text("better", 1, 700);
      }