class CandleEater extends Tile {
  constructor (col, row) {
    super(col, row)
    this.sprite = new Sprite(candleEaterImg, 1, 0, 200, 200);
    this.sideSprite = null;
  }
}
