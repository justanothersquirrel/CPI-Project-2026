class sensoryMemory {
  constructor(x, y, vx, vy, img, sound, size) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;

    this.img = img;
    this.sound = sound;
    this.size = random(100, 300);

    this.started = false; // prevents repeated loop calls

    //    // drag
    // this.dragging = false;
    // this.offsetX = 0;
    // this.offsetY = 0;
  }

  startAudio() {
    if (!this.started && this.sound) {
      this.sound.loop();
      this.started = true;
    }

    // if (!this.started) {
    //   this.sound.playMode("restart");
    //   this.sound.loop(); // ALWAYS looping
    //   this.started = true;
    // }
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wrap() {
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  // applyAudioFromPosition() {
  //   let vol = map(this.x, 0, width, 0, 1);
  //   vol = constrain(vol, 0, 1);
  //   this.sound.amp(vol);

  //   let spd = map(this.y, 0, height, 2, 0.5);
  //   spd = constrain(spd, 0.5, 2);
  //   this.sound.rate(spd);
  // }

  display() {
    push();
    translate(this.x, this.y);
    // tint(255,190);
    imageMode(CENTER);
    image(this.img, 0, 0, this.size, this.size);

    // fill(255, 0, 255);
    // textSize(80);
    // text(this.id, 0, 0);
    pop();
  }
}
