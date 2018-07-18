var makeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.leftVar = false;
  this.move();

};


makeDancer.prototype.step = function() {

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.slowStep = function() {

  setTimeout(this.step.bind(this), 2000);

  if(this.leftVar === true){
    return;
}

};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.move = function(){
  var x = 5 // seconds

  var top = $("body").height() * Math.random();
  var left = $("body").width() * Math.random();

  if(this.leftVar === true){
      return;
  }

  this.$node.css({"top":top, "left":left});

  setTimeout(this.move.bind(this), x * 1000);

};



makeDancer.prototype.setLeft = function(){
  this.leftVar = true;
  $('.robot').css('left', '0');

}
