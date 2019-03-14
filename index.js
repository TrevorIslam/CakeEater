var level = {
  size: [5, 6],
  tiles: [
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 1, 1, 1, 0,
    0, 0, 1, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 0, 0, 0
  ]
};
var tiles = [];
var cakeEater;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent("myCanvas");
    Tile.createGrid(level);
    cakeEater = new CakeEater(0,0);
}

function draw() {
  if (waitForResize) {return;}

  background(200);

  for(var tile of tiles) {
    tile.draw();
  }

  cakeEater.update();
}
