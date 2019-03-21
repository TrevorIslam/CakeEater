class Sprite {
  constructor(image, numberOfFrames, frameSpeed, sw, sh) {
    this.image = image;
    this.sw = sw || 32;
    this.sh = sh || 32;

    this.frame = 0;
    this.numFrames = numberOfFrames || 1;
    this.frameSpeed = frameSpeed || 0;
    this.animationNumber = 0;
  }

  draw(x, y, w, h) {
    var sy = this.animationNumber * this.sh;
    image(this.image, x, y, w, h, this.frame * this.sw, sy, this.sw, this.sh);

    this.animate();
  }

  animate() {
    if (this.frameSpeed <= 0) {
      return;
    }

    if (frameCount % this.frameSpeed === 0) {
      this.frame++;
    }

    if (this.frame >= this.numFrames) {
      this.frame = 0;
    }
  }
}
