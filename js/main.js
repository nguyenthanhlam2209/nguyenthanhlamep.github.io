$(document).ready(function(){
    $(window).scroll(function(envent){
        var vitri = $('html, body').scrollTop();
       // console.log(vitri);
       if(vitri >= 120)
       {
           $('.header-bottom').addClass('dungyen');
       }
       else
       {
        $('.header-bottom').removeClass('dungyen');
       }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});
