(function($) {
    $(function() {
      $('[data-jcarousel]').each(function() {
        var el = $(this);
        el.jcarousel(el.data());
      });
  
      $('[data-jcarousel-control]').each(function() {
        var el = $(this);
        el.jcarouselControl(el.data());
      });
    });
  })(jQuery);


  {

    // function or a jQuery selector to select the list
    list: function() {
      return this.element().children().eq(0);
    }
  
    // function or a jQuery selector to select the items
    items: function() {
      return this.list().children();
    }
  
    // animation speed
    animation:   400,
  
    // true = enables CSS3 transitions.
    transitions= false,
  
    // whether to wrap at the first or last item (or both) and jump back to the start/end
    // "first", "last", "both" or "circular"
    wrap=        null,
  
    // appears in vertical orientation
    vertical=    null,
  
    // appears in RTL (Right-To-Left) mode
    rtl=         null,
  
    // whether to center the items
    center=      false
  
  }
