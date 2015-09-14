$(document).ready( function() {

	var mouseovercol1 = false, mouseovercol2 = false, mouseovercol3 = false;
	$('#col-1').mouseenter( function() { mouseovercol1 = true; } );
	$('#col-2').mouseenter( function() { mouseovercol2 = true; } );
	$('#col-3').mouseenter( function() { mouseovercol3 = true; } );
	$('#col-1').mouseleave( function() { mouseovercol1 = false; } );
	$('#col-2').mouseleave( function() { mouseovercol2 = false; } );
	$('#col-3').mouseleave( function() { mouseovercol3 = false; } );
	
	var animateUp = function(hId, numPx) {
		var numPxString = '-=' + numPx;
		$(hId).stop(true, true).animate({top: numPxString},200);
	}
	
	var animateDown = function(hId) {
		$('#desc').remove();
		$(hId).animate({top: 0},200);
	}
		
	$('#col-1').hover( function() {
			animateUp('#h3-1', 30);
			setTimeout( function() { 
				if (mouseovercol1) 
					$('#h3-1').after('<p id="desc">Our homemade smoothies are made from fresh batches of fruit and veggies.</p>'); 
			}, 200);
		}, function() {
			animateDown('#h3-1');
		}
	);
	$('#col-2').hover( function() {
			animateUp('#h3-2', 15);
			setTimeout( function() {
				if (mouseovercol2)
					$('#h3-2').after('<p id="desc">Choose from a seasonal, savory selection of flavors.</p>');
			}, 200);
		}, function() {
			animateDown('#h3-2');
		}
	);
	$('#col-3').hover( function() {
		animateUp('#h3-3', 25);
			setTimeout( function() {
				if (mouseovercol3)
					$('#h3-3').after('<p id="desc">Order online right here, right now, and have it delivered to the comfort of your home!</p>');
			}, 200);
		}, function() {
			animateDown('#h3-3');
		}
	);
});