let space;
let fighter;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(153);
  space = loadImage('img/space.jpg');
  fighter = loadImage('img/fighter.png');
}
function draw() {
  image(space, 0, 0, window.innerWidth, window.innerHeight);
  image(fighter, window.innerWidth*0.15, window.innerHeight*0.35);
}
