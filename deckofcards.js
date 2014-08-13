//declare variables
var score = 100;
var dealt = false;
var hand = new Array(6);
var held = new Array(6);
var deck = new Array(53);

//Make filename for image given card object
function fname(){
  return this.num + this.suit + ".gif";
}

//Object constructor for cards
function Card(num, suit) {
  this.num = num;
  this.suit = suit;
  this.fname = fname;
}








