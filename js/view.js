var View = (function(){
    var init = function(){
        _setupListener();

    };

    var _setupListener = function(){
        $('.view-button_1').on('click' , _setView1);
        $('.view-button_2').on('click' , _setView2);
        $('.view-button_3').on('click' , _setView3);

    };
    var _setView1 = function(){

        $('.content-items').children().hide();
        $('.page2-items').show();
        $(this).addClass('.active_1')
    };
    var _setView2 = function(){

        $('.content-items').children().hide();
        $('.device-items').show();
    };
    var _setView3 = function(){

        $('.content-items').children().hide();
        $('.page1-items').show();
    };

    return {
        init : init
    };

})();
$(document).ready(function(){
    if($('.content-view_right-items').length) {
        View.init();
    }
});
