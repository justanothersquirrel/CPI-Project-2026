// ---------- Volume sliders UI ----------
let sliderSens = []; // one per sensory
let sliderLong = []; // one per long
let sliderW = 140;
let sliderH = 10;
let sliderPad = 18;

let activeSliderType = null; // "sens" | "long" | null
let activeSliderIndex = -1;

// -------------------- Background Image --------------------
let backgroundImage;

// -------------------- volume arrays ----------------------
let volSensory = []; // length 12
let volLong = []; // length 4

// -------------------- Canavs Reverb Reverse --------------------
let zoneReverb = { x: 0, y: 0, r: 250 };
let zoneReverse = { x: 0, y: 0, r: 180 };

let SHOW_ZONES = true;

let reverb;
let REVERB_TIME = 3.0;
let REVERB_DECAY = 2.0;
let REVERB_WET = 0.6;

// -------------------- user control --------------------

let draggedObj = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let savedVx = 0;
let savedVy = 0;

// -------------------- Arrays --------------------
let longMemoryArray = []; // longMemory objects
let perceptionsArray = []; // perception objects
let sensoryMemoryArray = []; //sensoryMemory Objects

// -------------------- longMemory Assets --------------------
let imageLongMemory = [];
let audioLongMemory = [];
let imageFileLongMemory = [
  "longMemory001.gif",
  "longMemory002.gif",
  "longMemory003.gif",
  "longMemory004.gif",
];
let audioFileLongMemory = [
  "longMemory01.mp3",
  "longMemory02.mp3",
  "longMemory03.mp3",
  "longMemory04.mp3",
];

// -------------------- perception Assets --------------------
let imagePerception = [];
let imageFilePerception = [
  "perception001.gif",
  "perception002.gif",
  "perception003.gif",
  "perception004.gif",
  "perception005.gif",
  "perception006.gif",
  "perception007.gif",
  "perception008.gif",
];
// -------------------- sensoryMemory Assets --------------------
let imageSensoryMemory = [];
let audioSensoryMemory = [];
let imageFileSensoryMemory = [
  "sensoryMemory001.gif",
  "sensoryMemory002.gif",
  "sensoryMemory003.gif",
  "sensoryMemory004.gif",
  "sensoryMemory005.gif",
  "sensoryMemory006.gif",
  "sensoryMemory007.gif",
  "sensoryMemory008.gif",
  "sensoryMemory009.gif",
  "sensoryMemory010.gif",
  "sensoryMemory011.gif",
  "sensoryMemory012.gif",
];
let audioFileSensoryMemory = [
  "sensoryMemory01.mp3",
  "sensoryMemory02.mp3",
  "sensoryMemory03.mp3",
  "sensoryMemory04.mp3",
  "sensoryMemory05.mp3",
  "sensoryMemory06.mp3",
  "sensoryMemory07.mp3",
  "sensoryMemory08.mp3",
  "sensoryMemory09.mp3",
  "sensoryMemory10.mp3",
  "sensoryMemory11.mp3",
  "sensoryMemory12.mp3",
];

// -------------------- Preload --------------------
function preload() {
  // background image
  backgroundImage = loadImage("ImageAssets/canvasImage03.gif");

  // longMemory images + audio
  for (let i = 0; i < imageFileLongMemory.length; i++) {
    imageLongMemory[i] = loadImage("ImageAssets/" + imageFileLongMemory[i]);
    audioLongMemory[i] = loadSound(
      "AudioAssets/" + audioFileLongMemory[i],
      () => console.log("true:", audioFileLongMemory[i]),
      () => console.error("false:", audioFileLongMemory[i]),
    );
  }

  // // sensoryMemory images + audio
  for (let i = 0; i < imageFileSensoryMemory.length; i++) {
    let imgPath = "ImageAssets/" + imageFileSensoryMemory[i];
    let audPath = "AudioAssets/" + audioFileSensoryMemory[i];

    imageSensoryMemory[i] = loadImage(
      imgPath,
      () => console.log("IMG OK", i, imgPath),
      () => console.error("IMG FAIL", i, imgPath),
    );

    audioSensoryMemory[i] = loadSound(
      audPath,
      () => console.log("AUD OK", i, audPath),
      () => console.error("AUD FAIL", i, audPath),
    );
  }

  // perception images only
  for (let i = 0; i < imageFilePerception.length; i++) {
    imagePerception[i] = loadImage("ImageAssets/" + imageFilePerception[i]);
  }
}

// -------------------- Setup --------------------
function setup() {
  createCanvas(windowWidth, windowHeight);

  // intiate reverbe reverse
  reverb = new p5.Reverb();
  reverb.set(REVERB_TIME, REVERB_DECAY);
  reverb.drywet(REVERB_WET);
  // placing circles of reverb and reverse
  zoneReverb.x = width / 2;
  zoneReverb.y = height / 2;

  // placing circles of reverb and reverse
  zoneReverse.x = width / 2;
  zoneReverse.y = height / 2;

  // create sensoryMemory objects
  for (let i = 0; i < imageFileSensoryMemory.length; i++) {
    if (!imageSensoryMemory[i] || !audioSensoryMemory[i]) {
      console.warn("SKIP sensory index", i, "missing asset");
      continue;
    }

    let sens = new sensoryMemory(
      random(width),
      random(height),
      random(-2, 2),
      random(-2, 2),
      imageSensoryMemory[i],
      audioSensoryMemory[i],
      120,
    );
    sens.id = i;
    sensoryMemoryArray.push(sens);
  }
  for (let i = 0; i < sensoryMemoryArray.length; i++) volSensory[i] = 1.0; //vol
  console.log("sensory created:", sensoryMemoryArray.length);

  // create longMemory objects
  for (let i = 0; i < imageLongMemory.length; i++) {
    let mem = new longMemory(
      random(width),
      random(height),
      random(-2, 2),
      random(-2, 2),
      imageLongMemory[i],
      audioLongMemory[i],
      random(70, 120),
    );
    mem.sound.loop();
    mem.sound.pause();
    longMemoryArray.push(mem);
  }
  for (let i = 0; i < longMemoryArray.length; i++) volLong[i] = 1.0; //vol

  // create perception objects
  // for (let i = 0; i < imagePerception.length; i++) {
  //   let perc = new perception(
  //     random(width),
  //     random(height),
  //     imagePerception[i],
  //     random(80, 300)
  //   );
  //   perceptionsArray.push(perc);
  // }

  // manual volume sensoryMemory
  volSensory[0] = 0;
  volSensory[1] = 0;
  volSensory[2] = 0;
  volSensory[3] = 0;
  volSensory[4] = 0;
  volSensory[5] = 0;
  volSensory[6] = 0;
  volSensory[7] = 0;
  volSensory[8] = 0;
  volSensory[9] = 0;
  volSensory[10] = 0;
  volSensory[11] = 0;
  // manual volume longMemory
  volLong[0] = 0;
  volLong[1] = 0;
  volLong[2] = 0;
  volLong[3] = 0;

  // Volume sliders UI
  buildVolumeSliders();

  function buildVolumeSliders() {
    sliderSens = [];
    sliderLong = [];

    // Sensory sliders (left)
    for (let i = 0; i < sensoryMemoryArray.length; i++) {
      sliderSens.push({
        x: 20,
        y: 20 + i * sliderPad,
        w: sliderW,
        h: sliderH,
      });
      if (volSensory[i] === undefined) volSensory[i] = 1.0;
    }

    // Long sliders (right)
    for (let i = 0; i < longMemoryArray.length; i++) {
      sliderLong.push({
        x: width - sliderW - 20,
        y: 20 + i * sliderPad,
        w: sliderW,
        h: sliderH,
      });
      if (volLong[i] === undefined) volLong[i] = 1.0;
    }
  }
}

// -------------------- Draw --------------------
function draw() {
  // background(255);
  image(backgroundImage, 0, 0, width, height);

  // sensoryMemory objects calling
  for (let sens of sensoryMemoryArray) {
    sens.startAudio();
    sens.update();
    sens.wrap();
    applyZones(sens, sens.x, sens.y); // applying reverb and reverse to objects
    sens.display();
  }
  for (let i = 0; i < sensoryMemoryArray.length; i++) {
    sensoryMemoryArray[i].sound.amp(volSensory[i]);
  }

  // perception objects calling
  for (let per of perceptionsArray) {
    per.separate(perceptionsArray); // steer away from neighbors
    per.update();
    per.borders();
    per.display();
  }

  // longMemory objects calling
  for (let mem of longMemoryArray) {
    mem.update();
    mem.bounce();
    applyZones(mem, mem.pos.x, mem.pos.y); // applying reverb and reverse to objects
    mem.display();
  }
  // check proximity between longMemory objects for audio toggle
  for (let i = 0; i < longMemoryArray.length; i++) {
    for (let j = i + 1; j < longMemoryArray.length; j++) {
      longMemoryArray[i].checkProximity(longMemoryArray[j]);
    }
  }
  for (let i = 0; i < longMemoryArray.length; i++) {
    longMemoryArray[i].sound.amp(volLong[i]);
  }

  if (SHOW_ZONES) {
    push();
    noFill();
    noStroke();
    // strokeWeight(3);

    // stroke(0, 200, 255, 160); // reverb
    // fill(0, 200, 255, 15);
    circle(zoneReverb.x, zoneReverb.y, zoneReverb.r * 2);

    // stroke(255, 100, 0, 160); // reverse
    // noFill();
    // fill(255, 100, 0, 15);
    circle(zoneReverse.x, zoneReverse.y, zoneReverse.r * 2);

    pop();
  }

  // Volume sliders UI
  drawVolumeSliders();
  function drawVolumeSliders() {
    push();
    textSize(1);
    noStroke();

    // Sensory text
    fill(255, 0, 0, 80);
    text("Sensory", 20, 14);
    for (let i = 0; i < sliderSens.length; i++) {
      drawOneSlider(sliderSens[i], volSensory[i], "S" + i);
    }

    // Long text
    fill(255, 0, 0, 80);
    text("Long", width - sliderW - 20, 14);
    for (let i = 0; i < sliderLong.length; i++) {
      drawOneSlider(sliderLong[i], volLong[i], "L" + i);
    }

    pop();
  }
  function drawOneSlider(s, v, label) {
    // track
    stroke(255, 0, 0, 50);
    strokeWeight(3);
    line(s.x, s.y, s.x + s.w, s.y);

    // knob
    let kx = s.x + constrain(v, 0, 5) * s.w;
    noStroke();
    fill(255, 0, 0, 80);
    circle(kx, s.y, 3);

    // label + value
    fill(255, 0, 0, 80);
    noStroke();
    text(label + " " + nf(constrain(v, 0, 1), 1, 2), s.x + s.w + 10, s.y + 4);
  }
}

// -------------------- Helper function --------------------
function applyZones(obj, x, y) {
  if (!obj.sound) return;

  // --- Reverse zone (buffer reverse) ---
  let inRev = dist(x, y, zoneReverse.x, zoneReverse.y) < zoneReverse.r;

  if (obj._inReverse === undefined) obj._inReverse = false;

  // on ENTER reverse zone
  if (inRev && !obj._inReverse) {
    obj._inReverse = true;

    let wasPlaying = obj.sound.isPlaying();
    if (wasPlaying) obj.sound.pause();

    obj.sound.reverseBuffer(); // reverse audio data
    obj._reversed = !obj._reversed;

    if (wasPlaying) obj.sound.loop(); // resume looping reversed
  }

  // on EXIT reverse zone (flip back)
  if (!inRev && obj._inReverse) {
    obj._inReverse = false;

    let wasPlaying = obj.sound.isPlaying();
    if (wasPlaying) obj.sound.pause();

    obj.sound.reverseBuffer(); // reverse again = original direction
    obj._reversed = !obj._reversed;

    if (wasPlaying) obj.sound.loop();
  }

  // --- Reverb zone (only if NOT in reverse zone, optional rule) ---
  let inRvb = dist(x, y, zoneReverb.x, zoneReverb.y) < zoneReverb.r;

  if (obj._inReverb === undefined) obj._inReverb = false;

  // if you want reverb independent of reverse, remove "&& !inRev" below
  inRvb = inRvb && !inRev;

  if (inRvb !== obj._inReverb) {
    obj._inReverb = inRvb;

    obj.sound.disconnect();
    if (inRvb) {
      reverb.process(obj.sound, REVERB_TIME, REVERB_DECAY);
      reverb.drywet(REVERB_WET);
    } else {
      obj.sound.connect(); // normal
    }
  }
}

// -------------------- Window Resize --------------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // buildVolumeSliders();
}

// ------------------- user interaction -------------------
function mousePressed() {
  userStartAudio();

  // 1) try sliders first
  if (pickSlider(mouseX, mouseY)) {
    updateActiveSlider(mouseX);
    return;
  }

  // 2) otherwise do your existing object drag (sensory objects)
  for (let i = sensoryMemoryArray.length - 1; i >= 0; i--) {
    let o = sensoryMemoryArray[i];
    if (dist(mouseX, mouseY, o.x, o.y) < o.size / 2) {
      draggedObj = o;
      dragOffsetX = o.x - mouseX;
      dragOffsetY = o.y - mouseY;

      savedVx = o.vx;
      savedVy = o.vy;
      o.vx = 0;
      o.vy = 0;
      break;
    }
  }
}

function mouseDragged() {
  // sliders
  if (activeSliderType) {
    updateActiveSlider(mouseX);
    return;
  }

  // object dragging
  if (draggedObj) {
    draggedObj.x = mouseX + dragOffsetX;
    draggedObj.y = mouseY + dragOffsetY;
  }
}

function mouseReleased() {
  // slider release
  activeSliderType = null;
  activeSliderIndex = -1;

  // object release
  if (draggedObj) {
    draggedObj.vx = savedVx;
    draggedObj.vy = savedVy;
    draggedObj = null;
  }

  userStartAudio();
}

// ---------- slider helpers ----------
function pickSlider(mx, my) {
  // sensory sliders
  for (let i = 0; i < sliderSens.length; i++) {
    if (hitSlider(sliderSens[i], mx, my)) {
      activeSliderType = "sens";
      activeSliderIndex = i;
      return true;
    }
  }
  // long sliders
  for (let i = 0; i < sliderLong.length; i++) {
    if (hitSlider(sliderLong[i], mx, my)) {
      activeSliderType = "long";
      activeSliderIndex = i;
      return true;
    }
  }
  return false;
}

function hitSlider(s, mx, my) {
  // allow a little vertical tolerance
  return mx >= s.x && mx <= s.x + s.w && abs(my - s.y) <= 10;
}

function updateActiveSlider(mx) {
  if (!activeSliderType) return;

  if (activeSliderType === "sens") {
    let s = sliderSens[activeSliderIndex];
    volSensory[activeSliderIndex] = constrain((mx - s.x) / s.w, 0, 1);
  } else if (activeSliderType === "long") {
    let s = sliderLong[activeSliderIndex];
    volLong[activeSliderIndex] = constrain((mx - s.x) / s.w, 0, 1);
  }
}
