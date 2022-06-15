let myFont;
let points;

function preload() {
  myFont = loadFont("OPTIAlpine-Primer.otf");
}

function setup() {
  createCanvas(400, 400);
  points = myFont.textToPoints("DM", 11, 295, 240, {
    sampleFactor: 0.8,
  });
  frameRate(20);
  console.log(points);
}

function draw() {
  background(0, 0, 0, 30);

  let choices = ["cyan", "yellow", "red", "pink", "blue", "green", "orange"];

  let that = (0, 4);

  for (
    let pointNum = 0;
    pointNum <= points.length - 1;
    pointNum = pointNum + 1
  ) {
    let point = points[pointNum];
    let y = point.y + 2 * sin(0.1 * point.x + 0.1 * frameCount);
    let x = point.x + 5 * cos(0.1 * point.y + 0.2 * frameCount);

    //  circle
    circle(x, y, random(that));
    // fill(random(choices))
    noFill();
    stroke("white");
    strokeWeight(1);
    // noStroke()
  }
}
