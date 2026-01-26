# PROJECT TITLE
Configured Performance Instrument created as an approach to experiemnting with improvised sound art performances. 

## Short Description
Configured Performance Instrument (CPI) is a project that was built upon a set of rules taken from a performance process. Its conceptual task is to find a way to connect between sound and drawing, as well as its relation to chance and improvisation. The instrument consists of nameless independent shapes on screen that have their own memories (sound) floating around and can be encountered by the user. 

## Concept 
The reason for making this project came from past performances I have participated in, both with different artists and individually. In these performances I tend to share my recordings, looking on the use of sound as a research tool, I lay out the tracks on the desktop using QuickTime and play everything at the same time. This listening method allows different layers to appear through coincidence. Then I start changing the volume and embrace chaos through improvisation. 

I took this process and developed it into a tool for improving and expanding my performances. At the same time, drawing has been an ongoing practice for me as a way to reflect on memory. This project became inspiring because it allowed me to connect both practices, bringing sound and drawing together as a single performative tool.

I titled the project Configured Performance Instrument to reflect what I am attempting to build: an instrument rather than a fixed artwork. Using p5.js, I explored a way to integrate my drawings and sounds simultaneously, allowing visual and sonic elements to operate together as a live system.
Configured Performance Instrument recreates my performance logic in a form that is accessible to other users, helping them understand improvisation and the importance of relying on chance.

At its core, the project is time-based, as it incorporates previously recorded situations collected from different times and locations. By reintroducing these recorded sounds into the present moment, the performance creates a window into memory, allowing different memories to intertwine with one another. Each sound carries its own past, and when activated in the present, these fragments meet by chance.

## Technology Used
This project uses p5.js and the p5.sound library to build a time-based, interactive audiovisual instrument. The system is structured around autonomous objects whose behaviors are defined through class-based logic. After simplifying object personalities and reducing inter-object dependencies, the technical focus shifted toward interface design and user interaction.

The user interface is intentionally minimal. Visual elements are not annotated to indicate which audio files they control, preserving ambiguity and avoiding deterministic mapping. This design choice supports improvisation and reflects the unpredictable conditions of live performance.

Interaction is implemented through volume sliders, which allow real-time manipulation of individual sound levels without exposing their identities. In addition, a circular interaction zone is positioned at the center of the canvas. When an object enters this zone, its associated sound is processed using reverb and buffer reversal, introducing spatial and temporal variation into the system.

ChatGPT was used as a technical support tool to assist with debugging, implementing the slider interface, and developing the spatial audio interaction logic. All assisted code sections are commented and referenced within the project for transparency.

## How to Run / Install
![alt text](image.png)

CPI can function either as an independent audiovisual installation or as an interactive instrument encountered within an exhibition space.

The user is invited to explore and experiment with the floating shapes moving across the screen. Each shape is paired with an audio recording that plays in a continuous loop. The user’s task is to adjust the volume levels and move selected shapes around the screen in order to discover which sound each object is playing.

Volume sliders control each audio independently
Zones affect audio in diameter 
Audio requires user interaction to start

## Requirements

Web browser on a mac or pc

Javascript 
p5.js library 
p5.sound.js

VS code with live server

headphones or speakers 

## Screenshots / Media
![alt text](image-2.png)
![alt text](image-1.png)

## Credits / Acknowledgements

this project was made by Aous

**References**

p5.js Core Documentation
p5.js (n.d.) p5.js Reference. Available at: https://p5js.org/reference/ (Accessed: 11 January 2026).
p5.js (n.d.) Object-Oriented Programming. Available at: https://p5js.org/learn/object-oriented-programming.html (Accessed: 11 January 2026).
p5.js (n.d.) Objects and Classes Example. Available at: https://p5js.org/examples/objects-objects.html (Accessed: 11 January 2026).
p5.js (n.d.) Preload and Assets. Available at: https://p5js.org/examples/structure-preload.html (Accessed: 11 January 2026).
p5.js (n.d.) p5.Vector Reference. Available at: https://p5js.org/reference/#/p5.Vector (Accessed: 11 January 2026).
p5.js (n.d.) loadImage(). Available at: https://p5js.org/reference/#/p5/loadImage (Accessed: 11 January 2026).

p5.sound Library
p5.js (n.d.) p5.SoundFile. Available at: https://p5js.org/reference/#/p5.SoundFile (Accessed: 11 January 2026).
p5.js (n.d.) p5.Reverb. Available at: https://p5js.org/reference/#/p5.Reverb (Accessed: 11 January 2026).
p5.js (n.d.) reverseBuffer(). Available at: https://p5js.org/reference/#/p5.SoundFile/reverseBuffer (Accessed: 11 January 2026).
p5.js (n.d.) userStartAudio(). Available at: https://p5js.org/reference/#/p5/userStartAudio (Accessed: 11 January 2026).
p5.js (n.d.) Sound Playback Example. Available at: https://p5js.org/examples/sound-play-song.html (Accessed: 11 January 2026).

Interaction & User Interface
p5.js (n.d.) mousePressed(). Available at: https://p5js.org/reference/#/p5/mousePressed (Accessed: 11 January 2026).
p5.js (n.d.) mouseDragged(). Available at: https://p5js.org/reference/#/p5/mouseDragged (Accessed: 11 January 2026).
p5.js (n.d.) createSlider(). Available at: https://p5js.org/reference/#/p5/createSlider (Accessed: 11 January 2026).
W3Schools (n.d.) HTML Range Slider. Available at: https://www.w3schools.com/howto/howto_js_rangeslider.asp (Accessed: 11 January 2026).

Nature of Code
Shiffman, D. (2012) The Nature of Code. Available at: https://natureofcode.com/ (Accessed: 11 January 2026).
Shiffman, D. (n.d.) Vectors. Available at: https://natureofcode.com/vectors/ (Accessed: 11 January 2026).
Shiffman, D. (n.d.) Autonomous Agents. Available at: https://natureofcode.com/autonomous-agents/ (Accessed: 11 January 2026).
Shiffman, D. (n.d.) Separation Behaviour Example. Available at: https://natureofcode.com/autonomous-agents/#example-59-separation (Accessed: 11 January 2026).

The Coding Train
Shiffman, D. (n.d.) Objects and Images. Available at: https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/7-arrays/8-objects-images (Accessed: 11 January 2026).
Shiffman, D. (n.d.) Loading and Playing Sound. Available at: https://thecodingtrain.com/tracks/sound/sound/1-loading-and-playing (Accessed: 11 January 2026).

YouTube Tutorials
YouTube (n.d.) Object-Oriented Programming in p5.js. Available at: https://www.youtube.com/watch?v=8j0UDiN7my4 (Accessed: 11 January 2026).
YouTube (n.d.) Sound in p5.js. Available at: https://www.youtube.com/watch?v=1OJj0xL8RCM (Accessed: 11 January 2026).
YouTube (n.d.) p5.js Playlist. Available at: https://www.youtube.com/watch?v=vqE8DMfOajk (Accessed: 11 January 2026).

p5.js Editor Sketches (Code References)
p5.js Editor (n.d.) Sound: Manipulate Sound. Available at: https://editor.p5js.org/p5/sketches/Sound:_Manipulate_Sound (Accessed: 11 January 2026).
p5.js Editor (n.d.) Example Sketch. Available at: https://editor.p5js.org/dhhepting/sketches/SCw1qcWnK (Accessed: 11 January 2026).

JavaScript & Debugging
MDN Web Docs (n.d.) JavaScript Reference. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/ (Accessed: 11 January 2026).
MDN Web Docs (n.d.) Cannot Access Property Error. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_property (Accessed: 11 January 2026).
MDN Web Docs (n.d.) Redeclared Parameter Error. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter (Accessed: 11 January 2026).

Local Server & Deployment
p5.js Wiki (n.d.) Local Server. Available at: https://github.com/processing/p5.js/wiki/Local-server (Accessed: 11 January 2026).

Audio Theory & Research
MDN Web Docs (n.d.) Web Audio API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API (Accessed: 11 January 2026).
Sound on Sound (n.d.) Spatial Audio Primer. Available at: https://www.soundonsound.com/techniques/spatial-audio-primer (Accessed: 11 January 2026).
Oxford University Press (n.d.) Sound and Media Studies. Available at: https://academic.oup.com/edited-volume/35433/chapter/303234434 (Accessed: 11 January 2026).

## Contact / Links
aous.stb@gmail.com
www.houseaous.com

