class CakeEater {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.xvel = 0;
    this.yvel = 0;

    this.sprite = new Sprite(cakeEaterImg, 2, 30, 32, 32);
  }

  draw() {
    this.sprite.draw(this.x, this.y, tilesize, tilesize);
  }

  move() {
    if (this.x % tilesize === 0 && this.y % tilesize === 0) {
      this.xvel = 0;
      this.yvel = 0;

      this.setVelocity();

      var myCol = this.x / tilesize;
      var myRow = this.y / tilesize;

      Tile.eat(myCol, myRow);
    }
    this.x += this.xvel;
    this.y += this.yvel;
  }

  setVelocity() {
    var speed = 3.125;
    var myCol = this.x / tilesize;
    var myRow = this.y / tilesize;

    if (register[RIGHT_ARROW] && Tile.placeFree(myCol + 1, myRow)) {
      this.xvel = speed;
      this.yvel = 0;
      this.sprite.animationNumber = 3;
    } else if (register[LEFT_ARROW] && Tile.placeFree(myCol - 1, myRow)) {
      this.xvel = -speed;
      this.yvel = 0;
      this.sprite.animationNumber = 0;
    } else if (register[UP_ARROW] && Tile.placeFree(myCol, myRow - 1)) {
      this.xvel = 0;
      this.yvel = -speed;
      this.sprite.animationNumber = 2;
    } else if (register[DOWN_ARROW] && Tile.placeFree(myCol, myRow + 1)) {
      this.xvel = 0;
      this.yvel = speed;
      this.sprite.animationNumber = 1;
    }
    if (this.xvel == 0 && this.yvel == 0) {
      this.sprite.frameSpeed = 30;
    } else {
      this.sprite.frameSpeed = 10;
    }
  }

  update() {
    this.move();
    this.draw();
  }

}
