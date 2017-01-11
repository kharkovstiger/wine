$( document ).ready(function() {

    var country=$('.country');
    country.on('mouseenter',function(){
        $(this).closest('li').find('.sub-menu').slideDown();
    });
    country.on('mouseleave',function(){
        $(this).closest('li').find('.sub-menu').slideUp();
    });
    
    $('.sub-menu').on('click','.about, .brands, .history',function () {
        var clThis='.'+this.className;
        var cl=clThis+'.'+$(this).closest('.country').find('h1').text();
        var clImgCountry='img.'+$(this).closest('.country').find('h1').text();

        $('.showed').fadeOut();
        $('.showed').removeClass('showed');

        $(cl).fadeIn();
        $(cl).addClass('showed');
        $(clImgCountry).fadeIn();
        $(clImgCountry).addClass('showed');

    });
});