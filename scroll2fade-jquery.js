$(document).ready(function() {

	var $fadeIn = $('.scroll-fade-in');

	//set opacity of all elements with the 'scroll-fade-in' class
	$fadeIn.css({"opacity":"0"});

	$(window).scroll( function(){
        
        //for every element with 'scroll fade in' we calculate viewport and element dimensions
        $fadeIn.each( function(){
                
            var bottomElement = $(this).position().top + $(this).outerHeight() - $(this).data('offset');
            var bottomWindow = $(window).scrollTop() + $(window).height();
                
	        // if we can see the whole element, fade in
	        if( bottomWindow > bottomElement ){
	                    
	            $(this).animate({'opacity':'1'},1500);
	                        
	        }
                
        }); 
        
    });
});