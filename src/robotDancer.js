var makeRobotDancer = function(top, left, timeBetweenSteps) {
  // toogles between a node class in css
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.move();
}

makeRobotDancer.prototype = Object.create(makeDancer.prototype);
makeRobotDancer.prototype.constructor = makeRobotDancer;

makeRobotDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep.call(makeDancer);
  makeDancer.prototype.slowStep.call(this);
  // console.log(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.addClass('robot');

// create new set timeout function tha

// timoutfunction should change the top and left css property to random values

};