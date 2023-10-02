let gridSize = 50;
let gridPoss = [];
let gridShapes = [];


function setup() {
  createCanvas(800,800);
  rectMode(CENTER);
  let rows = int(height / gridSize);
  let cols = int(width / gridSize);
  // initialize all grid rects
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      gridPoss.push(createVector((i + 0.5) * gridSize, (j + 0.5) * gridSize));
      gridShapes.push(0);
    }
  }
}


function draw() {
  background(255);

  for (let i = 0; i < gridPoss.length; i++) {
    // draw a hollow grid rect
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(gridPoss[i].x, gridPoss[i].y, gridSize, gridSize);
    
    // draw a solid shape
    noStroke();
    fill(0);
    if (gridShapes[i] == 1) {
      triangle(
        gridPoss[i].x - gridSize / 2,
        gridPoss[i].y - gridSize / 2,
        gridPoss[i].x + gridSize / 2,
        gridPoss[i].y - gridSize / 2,
        gridPoss[i].x,
        gridPoss[i].y + gridSize / 2
      );
    }

    if (gridShapes[i] == 2) {
      triangle(
        gridPoss[i].x,
        gridPoss[i].y - gridSize / 2,
        gridPoss[i].x - gridSize / 2,
        gridPoss[i].y + gridSize / 2,
        gridPoss[i].x + gridSize / 2,
        gridPoss[i].y + gridSize / 2
      );
    }

    if (gridShapes[i] == 3) {
      circle(gridPoss[i].x, gridPoss[i].y, gridSize);
    }
    
    if (gridShapes[i] == 4) {
      rect(gridPoss[i].x, gridPoss[i].y, gridSize, gridSize);
    }
  }
}

function mousePressed() {
  // click to change the shape inside the grid
  for (let i = 0; i < gridPoss.length; i++) {
    if (
      mouseX > gridPoss[i].x - gridSize / 2 &&
      mouseX < gridPoss[i].x + gridSize / 2 &&
      mouseY > gridPoss[i].y - gridSize / 2 &&
      mouseY < gridPoss[i].y + gridSize / 2
    ) {
      gridShapes[i] = (gridShapes[i] + 1) % 5;
    }
  }
}
