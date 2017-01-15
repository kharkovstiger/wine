$( document ).ready(function() { 

    var country=$('.country');
    country.on('mouseenter',function(){
        $(this).closest('li').find('.sub-menu').slideDown();
    });
    country.on('mouseleave',function(){
        $(this).closest('li').find('.sub-menu').slideUp();
    });
    
    $('.sub-menu').on('click','.brands, .history',function () {
        
        var clThis='.'+this.className;
        var clCountry='.'+$(this).closest('.country').find('h1').text();
        var cl=clThis+clCountry;

        $('.showed').fadeOut();
        $('.showed').removeClass('showed');

        $(cl).fadeIn();
        $(cl).addClass('showed');
        $('#map').fadeOut();

        // $('#map').addClass('showed');

    });
});

