// PandaMark jQuery Plugin
// by Daniel Montgomery

// The purpose of this plugin is to allow easy styling of checkboxes and radio buttons with CSS.
// This allows consistent look across browsers and platforms.

// This is influenced by ezMark, but I have taken an alternate approach.
// ezMark keeps the checkbox / radio button and just overlays an image / element on top that you can style. This causes issues since the size of the checkbox and the clickable area are dictated by the hidden checkbox / radio button.
// This function on the other hand makes the checkbox / radio button hidden and unclickable. Instead, whenever the visual element is clicked, the click is transfered to the underlying element.
// The visual layer also responds to 'change' events, so other JS that triggers the 'change' should also trigger the visual change. Some JS triggers 'click' events which is wrong. They should change the state and alert other JS functions with a 'change' event.

// To use, apply the function as such,
// $('input[type="checkbox"], input[type="radio"]').pandaMark();

// The styling of the elements (and the way the underlying elements are hidden) is controlled through CSS.  Please use the following as a reference:

// !!! The below code uses SASS comments, but you can just remove the comments or convert them to CSS comments if you want !!!

/*
.panda-mark-hide {
  opacity: 0;
  filter: alpha(opacity=0);
  pointer-events: none; // this prevents the checkbox / radio from being clicked on

}

.panda-mark-checkbox,
.panda-mark-radio {
  display: inline-block;
  margin-bottom: 0px; // for win
  vertical-align: baseline; // for osx
  height: 0.8em;
  width: 0.8em;
  
  border: 1px solid #D0D0D0;
}

.panda-mark-radio {
  border-radius: 15px;
}

.panda-mark-active {
  border: 1px solid #606060;
  background: #909090;
}
*/

;(function($) {

  // a function to update the state
  $.fn.pandaMarkUpdate = function(){

    // allow chaining
    return this.each(function() {

      var $wrapper = $(this).parent();

      $wrapper.removeClass('panda-mark-active');

      // check if checked or not
      if ((($(this).attr('type') === 'checkbox') && (this.checked === true)) || (($(this).attr('type') === 'radio') && (this.checked === true))){
        $wrapper.addClass('panda-mark-active');
      }
    });
  }

  $.fn.pandaMark = function() {
    
    // allow chaining
    return this.each(function() {
      var $this = $(this);

      // start creating the wrappers, etc
      if ($this.attr('type') === 'checkbox') {
        // wrap the element
        $this
          .wrap($('<div>')
          .addClass('panda-mark-checkbox'))
          .change(function(){$this.pandaMarkUpdate();});
      } 

      else if ($this.attr('type') === 'radio') {
        // wrap the element
        $this
          .wrap($('<div>')
          .addClass('panda-mark-radio'))
          .change(function(){
            // we need to look for all radio buttons with the same group (name), and trigger the pandaMarkUpdate function
            $('input[type=radio][name=' + $this.attr('name') + ']').pandaMarkUpdate();
          });
          ;
      }

      else {return;}

      // set the state and change it when the checkbox / radio is changed
      $this
        .pandaMarkUpdate()
        .addClass('panda-mark-hide');

      // clicking on the wrapper triggers a change event on the checkbox / radio
      $this.parent().click(function(){
        $this[0].checked = !$this[0].checked; // change the state using the JS (not jQuery) element
        $this.change(); // trigger the change so other things can react!
      });
    });
  }   
})(jQuery);