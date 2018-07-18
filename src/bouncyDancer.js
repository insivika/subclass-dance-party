var makeBouncyDancer = function(top, left, timeBetweenSteps) {
    // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
    makeDancer.call(this, top, left, timeBetweenSteps);
  
  };
  
  
  
  makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
  makeBouncyDancer.prototype.constructor = makeBouncyDancer;
  
  makeBouncyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // oldStep.call(makeDancer);
    makeDancer.prototype.step.call(this);
  
    
    this.$node.toggleClass('dancer bouncy');
  };
  