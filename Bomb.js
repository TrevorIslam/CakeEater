class Bomb extends Tile {
  constructor (col, row) {
    super(col, row)
    this.sprite = new Sprite(bombImg, 1, 0, 320, 320);
    this.sideSprite = null;
  }
  draw () {
    let x = this.col * tilesize;
    let y = this.row * tilesize;

    image(cakeTileImage, x, y, tilesize, tilesize);
    super.draw();

  }
}
