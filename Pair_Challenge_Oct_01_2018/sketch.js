// testing qube's branch
// cloned my repo test

var myArray = ["My", "Group", "Consists", "Of", "Christy", "Aaron", "Jason"];

var circle = {
  x: 400 / 10 - 20,
  y: 400 / 10 - 20,
  diameter: 20,
  speed: 1,
  display: function() {
    for (var i = 0; i < width; i += width / 10) {
      for (var j = 0; j < height; j += height / 10) {
        ellipse(this.x + i, this.y + j, this.diameter);
      }
    }
  },
  pressedButton: function() {
    if (mouseIsPressed) {
      background(0, 255, 0);
      this.display();
    }
  },
  movement: function() {
    this.x = this.x + this.speed;
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('white');
  circle.display();
  circle.pressedButton();
  circle.movement();


  for (var m = 0; m < myArray.length; m++) {
    textSize(18);
    fill('red');
    text(myArray[m], m * 50 + 30, m * 50 + 50);
  }
  if (mouseX > 200 && mouseX < 400) {
    fill(0);
    circle.display();
  }
}
