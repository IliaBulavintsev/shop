var Slideshow_1 = (function(){
     var _changeSlide = function ($this, path) {
       var
           mainten = $this.parent(),
           img = $(mainten).find('.page2-imgs-img_main').children('img');
         img.attr('src', path);
     };

    return {
        init : function(){
            $('.page2-imgs-img').on('click' , function(e){
                e.preventDefault();
                var path = $(this).children('img').attr('src');
                _changeSlide($(this), path)
            })
        }
    }
})();
var Slideshow_2 = (function(){
    var _changeSlide = function ($this, path) {
        var container = $this.closest('.device-image'),
            mainten = container.parent(),
            img = $(mainten).find('.device-image-item_main').children('img');

        img.attr('src', path);
    };

    return {
        init : function(){
            $('.device-image-item').on('click' , function(e){
                e.preventDefault();
                var path = $(this).children('img').attr('src');
                _changeSlide($(this), path)
            })
        }
    }
})();
var Accardeon = function(){

    var _openAccardeon = function(){
        var $this = $(this),
            container = $this.closest('.accardion-item'),
            content  = container.find('.accardion-item_wrap'),
            arrow = container.find('.accardion-item-trigger'),
            otherContent = $this.closest('.accardion').find('.accardion-item_wrap'),
            otherArrow = $this.closest('.accardion').find('.accardion-item-trigger');


        if (!content.hasClass('active')){
            otherContent.slideUp(0).removeClass('active');
            otherArrow.removeClass('accardion-item-trigger_active');
            content.addClass('active');
            arrow.addClass('accardion-item-trigger_active');
            content.stop(true, true).slideDown(0);
        }else{
            content.removeClass('active');
            arrow.removeClass('accardion-item-trigger_active');
            content.stop(true, true).slideUp(0);
        }

    };

    return{
        init : function(){
            $('.accardion-item-trigger').on('click', _openAccardeon)
        }
    }
}();

$(function(){
    $('.information-column').columnize({
        width : 500
       });
    $('a').on('click', function(e){
        e.preventDefault();
    });

    if ($('.sort-select').length) {
        $('.sort-select').select2({
            minimumResultsForSearch: Infinity
        });
    }
    if ($('.device-image').length){
        Slideshow_2.init();
    }
    if ($('.page2-imgs').length) {
        Slideshow_1.init();
    }

    Accardeon.init();

    $('.reset_filter').on('click', function(){
        var $this = $(this),
            container = $this.closest('.accardion-item-subitems'),
            checkboxes = container.find('input:checkbox');

        checkboxes.each(function(){
            $(this).prop('checked' , '');
        });
    });
});
