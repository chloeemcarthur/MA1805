function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(104, 20,224);
  arc(160, 220, 80, 60, 0, PI);
  arc(240, 220, 80, 60, 0, PI);
  noFill();
  point (150, 150);
  point (250, 150);
  triangle (190, 180, 210, 180, 200, 200);
  circle (150, 150, 50);
  circle (250, 150, 50);
  line (120, 102, 180, 125);
  line (220, 125, 280, 102);
  stroke ('white')
}


