

var makeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<div></div>');

  this.step();

  // this.top = top;

  // this.left = left;

  this.setPosition(top, left);

  this.setLeft = false;

  // this.startMoving()

  // this.move();
};

makeDancer.prototype.startMoving = function(){

  this.move();

}

makeDancer.prototype.setLeft = function(){

  this.alignLeft = true;

  $('.robot').css('left', '0');



}

makeDancer.prototype.step = function() {

    setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.slowStep = function() {

    setTimeout(this.step.bind(this), 2000);

};

makeDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {

    top: top,

    left: left

  };

  this.$node.css(styleSettings);

};

makeDancer.prototype.move = function(top , left, time){

  if(this.setLeft === false){

    this.setPosition(top, left)

    setTimeout(this.move.bind(this, $("body").height() * Math.random(),

     $("body").width() * Math.random()), 2000);
  }

}





