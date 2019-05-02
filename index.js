var levelNum = 0;
var tiles = [];
var cakeEater;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent("myCanvas");
    Tile.createGrid(levels[levelNum]);
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
    checkComplete();
  } else {
    placeEater();
  }

  if (register[82]) {
    reset();
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

    if (register["mouseleft"] || register[69]) {
      cakeEater = new CakeEater(x, y);
    }
  }
}

function checkComplete() {
  var uneaten = tiles.filter(tile => Tile.placeFree(tile.col, tile.row));

  if (uneaten.length <= 0) {
    levelNum++;
    reset();
  }
}

function reset () {
  tiles = [];
  cakeEater = null;
  Tile.createGrid(levels[levelNum])
}
