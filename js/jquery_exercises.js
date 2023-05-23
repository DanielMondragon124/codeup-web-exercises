"use strict";

$(function() {

    $('h1').click(function() {
        $(this).css('background-color', 'yellow');
    });

    $('p').dblclick(function(e){
        $(this).css('font-size','18px');
    });

    $('li').hover(
        function() {
            $(this).css('color','red');
        },
        function() {
            $(this).css('color','black');
        }
    )


    // $('li').css('font-size','20px');
    // $('h1, p,li').css('background-color', 'yellow')
    // var contents = $('h1').html();
    // alert(contents);
    //
    // $('.codeup').css('border', '1px solid red');


    // alert( 'The DOM has finished loading!' );
});