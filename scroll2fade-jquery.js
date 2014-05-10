$(document).ready(function() {

	var $fadeIn = $('.scroll-fade-in');

	//set opacity of all elements with the 'scroll-fade-in' class
	$fadeIn.css({"opacity":"0"});

	$(window).scroll( function(){
        
        //for every element with 'scroll fade in' we calculate viewport and element dimensions
        $fadeIn.each( function(){
                
            var bottom_of_element = $(this).position().top + $(this).outerHeight() - $(this).data('offset');
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
	        // if we can see the whole element, fade in
	        if( bottom_of_window > bottom_of_element){
	                    
	            $(this).animate({'opacity':'1'},1500);
	                        
	        }
                
        }); 
        
    });
});