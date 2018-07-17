var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  // toogles between a node class in css
  makeDancer.call(this, top, left, timeBetweenSteps);
}

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep.call(makeDancer);
  makeDancer.prototype.slowStep.call(this);
  // console.log(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('dancer bouncy');
};