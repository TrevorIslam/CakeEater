class CakeEater {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.xvel = 0;
    this.yvel = 0;
  }

  draw() {
    fill(100,100,200);
    rect(this.x, this.y, tilesize, tilesize);
  }

  move() {
    if (this.x % tilesize === 0 && this.y % tilesize === 0) {
      this.xvel = 0;
      this.yvel = 0;

      this.setVelocity();
    }
    this.x += this.xvel;
    this.y += this.yvel;
  }

  setVelocity() {
    var speed = 2;

    if (register[RIGHT_ARROW] === true) {
      this.xvel = speed;
      this.yvel = 0;
    } else if (register[LEFT_ARROW] === true) {
      this.xvel = -speed;
      this.yvel = 0;
    } else if (register[UP_ARROW] === true) {
      this.xvel = 0;
      this.yvel = -speed;
    } else if (register[DOWN_ARROW] === true) {
      this.xvel = 0;
      this.yvel = speed;
    }
  }

  update() {
    this.move();
    this.draw();
  }

}
