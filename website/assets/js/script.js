$(document).ready(function(){

	// type with letters

	$('.letters').each(function() {

	  var $letterWrapper = $(this);
	  var letters = $letterWrapper.html().split('');
	  var letterArray = [];

	  for (i = 0; i < letters.length; i++) {
	    console.log(letters[i]);

	    var character = letters[i];
	    var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
	    var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
	    
	    letterArray.push(characterHTML);
	  };

	  $letterWrapper.html(letterArray);

	});

	// sounds

	var audioOne = document.createElement('audio');
    audioOne.setAttribute('src', 'assets/sound/1.wav');

    $.get();

    audioOne.addEventListener("load", function() {
        audioOne.play();
    }, true);
	
	$('.letter').mouseover(function() {
		audioOne.play();
	});

	// click and invert

	$('.letter').click(function(){

		var state = 'off';
		    
	    if($(this).hasClass('inverted')){
	      // make normal
	      $(this).removeClass('inverted');
	    }
	    
	    else {
	      // invert it
	      $(this).addClass('inverted');
	    }   

	});

});