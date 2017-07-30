//Custom Javascript Code
//This should flip between two images upon hover of image in header in contact page
// var phoneImage = document.getElementById('monsterPhonePic');
//
// var phoneImageWithFood = document.getElementById('monsterPhonePicWithFood');
//
// phoneImage.addEventListener('mouseover', function() {
//     phoneImage.className = 'hide';
//     phoneImageWithFood.className = 'show'
// });
// phoneImageWithFood.addEventListener('mouseleave', function() {
//     phoneImage.className = 'show';
//     phoneImageWithFood.className = 'hide'
// });

//JQuery Code
$(document).ready(function() {
    //ToolTip Plugin
    //One of the required two to use
    // $('.tooltip').tooltipster({
    //     animation: 'swing',
    //     maxWidth: 180
    // });
    //Backstretch Plugin
    //Second of the two required to use
    $ ('#background-image').backstretch("http://dl.dropbox.com/u/515046/www/garfield-interior.jpg");
    //Custom JQuery
    //This code will make paragraph text in about page red on mouseover
    $("#test").mouseover(function() {
        $('h3').addClass('onHoverRed');
    });
    $("#test").mouseleave(function() {
        $('h3').removeClass('onHoverRed');
    });


    // $('p').hover(
    //     function(
    //          $( 'h3' ).append( $( "<span> ***</span>" ) );
    //     ) {},
    //     function(
    //          $( 'h3' ).find( "span:last" ).remove();
    //     ) {}
    // );
});
