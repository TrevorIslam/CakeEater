var tilesize = 50;
var waitForResize = false;

class Tile {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.sprite = new Sprite(cakeTileImage);
    this.sideSprite = new Sprite(eatenCakeTileImg);
  }

  draw() {
    let x = this.col * tilesize;
    let y = this.row * tilesize;

    let index = Tile.getIndex(this.col, this.row + 1);

    let belowTile = tiles[index];

    if (this.sideSprite && belowTile && belowTile instanceof Crumb) {
      this.sideSprite.draw(x, y, tilesize, tilesize)
    } else {
      this.sprite.draw(x, y, tilesize, tilesize);
    }

  }

  static getIndex(col, row) {
    var numCols = width / tilesize;

    let index = col + row * numCols;
    return index;
  }

  static createGrid(levelData) {
    let numCols = levelData.size[0];
    let numRows = levelData.size[1];

    waitForResize = true;
    resizeCanvas(numCols * tilesize, numRows * tilesize);
    waitForResize = false;

    for (var r = 0; r < numRows; r++) {
      for (var c = 0; c < numCols; c++) {
        var index = Tile.getIndex(c, r);
        if (levelData.tiles[index] === 0) {
          tiles.push(new Tile(c, r));
        } else if (levelData.tiles[index] === 1) {
          tiles.push(new Wall(c, r));
        }
      }
    }
  }

  static placeFree(col, row) {
    var index = Tile.getIndex(col, row);

    var numCols = width / tilesize;
    var numRows = height / tilesize;

    if (row >= numRows || row < 0 || col >= numCols || col < 0) {
      return false;
    }

    if (tiles[index] instanceof Wall) {
      return false;
    }

    if (tiles[index] instanceof Crumb) {
      return false;
    }

    return true;
  }

  static eat (col, row) {
   var index = Tile.getIndex(col, row);

   if (!(tiles[index] instanceof Crumb)) {
     tiles[index] = new Crumb (col, row);
    }
  }
}
