class Wall extends Tile {
  constructor(col, row) {
    super(col, row);
    this.sprite = new Sprite(candleImg, 2, 30);
    this.sideSprite = new Sprite(eatenCandleImg, 2, 30);
    
  }
}
