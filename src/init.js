$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're suposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });


  $('.lineButton').on('click', function(event) {

    var moveAgainFunctionName = $(this).data('line-up');

    var moveAgainFunction = window[moveAgainFunctionName];

    makeDancer.prototype.setLeft();

  });

  $('.moveAgainButton').on('click', function(event){

    setLeft = false;

  });

});
