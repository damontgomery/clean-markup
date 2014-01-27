// Wrap everything in a private function. Drupal 7 standard.
(function ($) {
  // on document ready
  $(document).ready(function(){
    //replacement for toggle function to remove "element style if hidding"
    $.fn.responsive_toggle = function () {
      if (this.css('display') === 'block'){this.css({'display' : ''});}
      else {this.css({'display' : 'block'});}
    }
  });//end of document ready

  $(window).load(function(){
  /*Responsive hacks*/

    /*Set all selected elements to the same height*/
    resp_max_height = function(elements){
      var max_height = 0;

      //clear height before measuring
      elements.css({'height': ''});

      //measure
      elements.each(function(){
        max_height = Math.max(max_height, $(this).height());
      });

      //set
      elements.height(max_height);
    }
    
    /*Set the grid blocks to the same height*/
    resp_max_height($('.grid-block > .content'));
    $(window).resize(function(){
      resp_max_height($('.grid-block > .content'));
    });
    
    resp_max_height($('.grid-block-wide > .content'));
    $(window).resize(function(){
      resp_max_height($('.grid-block-wide > .content'));
    });
    
  }); //end of window load
  
}(jQuery));
