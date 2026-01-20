class perception {
  constructor(x, y, img, size) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector(-1, 0);
    this.img = img;
    this.size = random(100,400);
    this.maxspeed = random(5,20);
    this.maxforce = 0.05; // steering force
    this.r = size / 3; // radius for separation

    //makign a trail
    this.history = [];
    this.maxHistory = random(0,20); // trail length
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  // Separation behavior: steer away from nearby perception objects
  separate(vehicles) {
    let desiredSeparation = this.r * 2;
    let sum = createVector();
    let count = 0;

    for (let other of vehicles) {
      let d = p5.Vector.dist(this.position, other.position);
      if (this !== other && d < desiredSeparation) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.setMag(1 / d); // stronger steering when closer
        sum.add(diff);
        count++;
      }
    }

    if (count > 0) {
      sum.setMag(this.maxspeed);
      let steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  }

  //update velocity position ghosting trail
  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    // store position for image trail
    this.history.push(this.position.copy());
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    }
  }
  
  // Display perception object
  display() {
    // Draw trail first
    for (let i = 0; i < this.history.length; i++) {
      let p = this.history[i];
      let alpha = map(i, 0, this.history.length, 50, 255); // fade older images

      push();
      translate(p.x, p.y);
      tint(255, alpha); // apply transparency
      imageMode(CENTER);
      image(this.img, 0, 0, this.size, this.size);
      pop();
    }

    // Draw current image fully opaque
    push();
    translate(this.position.x, this.position.y);
    noTint();
    imageMode(CENTER);
    image(this.img, 0, 0, this.size, this.size);
    pop();
  }

  // Wraparound edges
  borders() {
    if (this.position.x < -this.r) this.position.x = width + this.r;
    if (this.position.y < -this.r) this.position.y = height + this.r;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
  }
}

