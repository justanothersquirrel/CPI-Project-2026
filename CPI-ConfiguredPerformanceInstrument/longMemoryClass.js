class longMemory {
  constructor(x, y, vx, vy, img, sound, size) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);

    this.img = img;
    this.sound = sound;
    this.size = random(100,200);

    // Track objects already toggled during current contact
    this.touchedObjects = new Set();
  }

  update() {
    this.pos.add(this.vel);
    this.angle += this.rotationSpeed;
  }

  bounce() {
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }

  checkProximity(other) {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    let radius = ((this.size + other.size) / 2) * 0.5;

    if (d < radius) {
      if (!this.touchedObjects.has(other)) {
        // toggle THIS
        if (this.sound.isPlaying()) this.sound.pause();
        else this.sound.loop();
        console.log("PAUSE:", other.sound.file);

        // toggle OTHER
        if (other.sound.isPlaying()) other.sound.pause();
        else other.sound.loop();
        console.log("PLAY:", other.sound.file);
        this.touchedObjects.add(other);
        other.touchedObjects.add(this);
      }
    } else {
      this.touchedObjects.delete(other);
      other.touchedObjects.delete(this);
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.size, this.size);


    // fill(255, 0, 0);
    // stroke(255, 0, 0, 120);
    // strokeWeight(2);

    // ellipse(0, 0, ((this.size + this.size) / 2) * 0.5);
    pop();
  }
}
