var level = {
  size: [5, 6],
  tiles: [
    0, 0, 0, 0, 0,
    0, 1, 0, 1, 0,
    0, 1, 0, 1, 0,
    0, 0, 0, 0, 0
  ]
};
var tiles = [];
var cakeEater;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent("myCanvas");
    Tile.createGrid(level);
    cakeEater = null;
}

function draw() {
  noStroke();
  if (waitForResize) {return;}

  background(200);

  for(var tile of tiles) {
    tile.draw();
  }
  if (cakeEater) {
    cakeEater.update();
  } else {
    placeEater();
  }
}

function placeEater() {
  var x = mouseX - mouseX % tilesize;
  var y = mouseY - mouseY % tilesize;

  var col = x / tilesize;
  var row = y / tilesize;

  if (Tile.placeFree(col, row)) {
    strokeWeight(2);
    stroke(255,255,255);
    noFill();
    rect(x, y, tilesize, tilesize);
  }

}
