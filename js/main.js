var Slideshow_1 = (function(){
     var _changeSlide = function ($this, path) {
       var //container = $this.closest('.device-image'),
           mainten = $this.parent(),
           img = $(mainten).find('.page2-imgs-img_main');


            //console.log(container);
         console.log(img);
         img.css('background', path);
     };

    return {
        init : function(){
            $('.page2-imgs-img').on('click' , function(e){
                e.preventDefault();
                var path = $(this).css('background');
                console.log(path);
                _changeSlide($(this), path)
            })
        }
    }
})();
var Slideshow_2 = (function(){
    var _changeSlide = function ($this, path) {
        var container = $this.closest('.device-image'),
            mainten = container.parent(),
            img = $(mainten).find('.device-image-item_main');


        console.log(container);
        console.log(img);
        img.css('background', path);
    };

    return {
        init : function(){
            $('.device-image-item').on('click' , function(e){
                e.preventDefault();
                var path = $(this).css('background');
                console.log(path);
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


        console.log(arrow);

        if (!content.hasClass('active')){
            otherContent.slideUp(0).removeClass('active');
            otherArrow.removeClass('accardion-item-trigger_active');
            content.addClass('active');
            arrow.addClass('accardion-item-trigger_active');
            content.stop(true, true).slideDown(0);
        }else{
            console.log('else');
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
    console.log('ready');
    $('.information-column').columnize({
        columns : 2,
        width : 200
       });
    $('a').on('click', function(e){
        e.preventDefault();
    });

    if ($('.sort-select').length) {
        $('.sort-select').select2({
            minimumResultsForSearch: Infinity
        });
    }
    Slideshow_2.init();
    Slideshow_1.init();

    Accardeon.init();

    $('.reset_filter').on('click', function(){
        var $this = $(this),
            container = $this.closest('.accardion-item-subitems'),
            checkboxes = container.find('input:checkbox');
        console.log(container);
        console.log(checkboxes);

        checkboxes.each(function(){
            $(this).prop('checked' , '');
        });
    });
});
