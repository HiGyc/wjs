/**
 * Created by Administrator on 2017/3/3.
 */
'use strict';

$(function(){
    function resize(){
        var windowwidth = $(window).width();

        var isSmallScreen = windowwidth < 768;

        $('#main_ad > .carousel-inner > .item').each(function(i,item){
            var $item = $(item);
            var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');

            $item.css('backgroundImage', 'url("' + imgSrc + '")');

            if(isSmallScreen){
                $item.html('<img src="' + imgSrc + '" alt="" />');
            }
            else{
                $item.empty();
            }
        });
    }
    $(window).on('resize',resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();

    var $ulContanier = $('.nav-tabs');
    var width = 30;
    $ulContanier.children().each(function(i,el){
        width += el.clientWidth;
    });
    if(width > $(window).width()){
        $ulContanier.css('width',width).parent().css('overflow-x','scroll');
    }

    var $newsTitle = $(".news-title");
    $('#news .nav-pills a').on('click',function(){
        var title =$(this).data('title');
        $newsTitle.text(title);
    })

    var $carousels = $('.carousel');
    var startX,endX;
    var offset = 50;
    $carousels.on('touchstart',function(e){
        startX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchmove',function(e){
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend',function(e){
        var distance = Math.abs(startX - endX);
        if(distance > offset){
            $(this).carousel(startX < endX ? 'prev' : 'next');
        }
    });
});