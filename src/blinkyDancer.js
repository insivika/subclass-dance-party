var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);

};



makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep.call(makeDancer);
  makeDancer.prototype.step.call(this);

  console.log(this)
  this.$node.toggle();
};
