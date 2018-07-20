var makeRobotDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('robot');
}

makeRobotDancer.prototype = Object.create(makeDancer.prototype);

makeRobotDancer.prototype.constructor = makeRobotDancer;

