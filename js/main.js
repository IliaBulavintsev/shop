$(function(){
    console.log('ready');
    $('.information-column').columnize({
        columns : 2,
        width : 200
       });
    $('a').on('click', function(e){
        e.preventDefault();
    })
});
