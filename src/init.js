var dancers = [];


$(document).ready(function() {

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're suposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      3000,
    );
    $('body').append(dancer.$node);

    dancers.push(dancer);

    dancer.setLeft = false;

  });

// line up dancers to the left at will
  $('.crazyMove').on('click', function(event){


    window.dancers.forEach(function(dancer, index){

        dancer.setLeft = true;

        dancer.$node.css('transition', '0.5s')

        dancer.setPosition($("body").height() * Math.random(), 10);

    });



  });

  // make dancers move again

  $('.moveAgainButton').on('click', function(event){

    window.dancers.forEach(function(dancer){

    dancer.setLeft = false;

    dancer.$node.css('transition', '1.5s')

    dancer.move($("body").height() * Math.random(),

    $("body").width() * Math.random(), 3000);

   });

   $('.moveAgainButton').toggleClass('moveAgainButton crazyButton1')

});

// On hover overchange size

$('.disco-ball').mouseenter(function() {
  console.log('test discoball')
  $('.disco-ball').css('width' , '300px');
});

$('.disco-ball').mouseleave(function() {
  $('.disco-ball').css('width' , '250px');
});

$('body').mouseenter(function(event) {

  if(event.target.className === 'robot'){

    console.log('true');
    console.log(event.target.style.width    )
    event.target.style.height = '150px';
    event.target.style.width = '150px';
  }
});

$('body').mouseleave(function(event) {

  if(event.target.className === 'robot'){

    console.log('true');
    console.log(event.target.style.width    )
    event.target.style.height = '120px';
    event.target.style.width = '120px';
  }
});


});
