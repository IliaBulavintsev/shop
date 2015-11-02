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
        console.log('click1');
        $('.content-items').children().hide();
        $('.page2-items').show();
        $(this).addClass('.active_1')
    };
    var _setView2 = function(){
        console.log('click2');
        $('.content-items').children().hide();
        $('.device-items').show();
    };
    var _setView3 = function(){
        console.log('click3');
        $('.content-items').children().hide();
        $('.page1-items').show();
    };

    return {
        init : init
    };

})();

View.init();