//Javascript Code
//This should flip between two images upon hover of image in header in contact page
var phoneImage = document.images[1];

var phoneImageWithFood = document.images[2];

phoneImage.addEventListener('mouseover', function() {
    phoneImage.className = 'hide';
    phoneImageWithFood.className = 'show'
});
phoneImageWithFood.addEventListener('mouseleave', function() {
    phoneImage.className = 'show';
    phoneImageWithFood.className = 'hide'
});

//JQuery Code
$(document).ready(function() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-light',
        animation: 'swing',
        maxWidth: 180
    });
    $ ('#background-image').backstretch("http://dl.dropbox.com/u/515046/www/garfield-interior.jpg");
});
