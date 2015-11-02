var Sidebar = (function () {
    var _insertValues =function($this){
      var container = $this.closest('.slider-form'),
          from = container.find('.accardion-item-from'),
          to = container.find('.accardion-item-to'),
          values = $this.slider('option', 'values');
        from.val(values[0]);
        to.val(values[1]);
    };
    return{
      init : function() {
          $(".ui-slider-range").each(function(){
              var $this = $(this),
                  min = parseInt($this.data('min')),
                  max = parseInt($this.data('max'));

              $this.slider({
                  range: true,
                  min: min,
                  max: max,
                  values: [min, max],
                  slide: function () {
                      _insertValues($this);
                  },
                  create: function(){
                    _insertValues($this)
                  }
              });
          });
      }
    }
}());




$(document).ready(function(){
    if ($('.ui-slider-range').length){
        Sidebar.init();
    }
});