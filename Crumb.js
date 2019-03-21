class Crumb extends Tile {
  constructor(col, row) {
    super(col, row);
    this.sprite = new Sprite(crumbsImg);
    this.sideSprite = null;
    this.sprite.animationNumber = floor(random(3));
  }
}
