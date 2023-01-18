$(document).ready(function () {

    $(".nav_hover").hover(function () {
        console.log('Working here');
        $(this).find('.inner_nav_contents').toggleClass('hidden');
    });

    // Add click events to show faq group
    $("#faq div.faq-group").click(function () {
        let __that = $(this);
        __that.find('.inner').slideToggle();
        __that.find('svg').toggleClass('rotate-90');
    });


    $(".open__aside").click(function () {
        $("aside").slideToggle('slow');
    });

    $(".close__aside").click(function () {
        $("aside").slideToggle('fast');
    });

    $(".fag-menu").click(function () {
        let __that = $(this);
        __that.find(".menu-dropdown").slideToggle();

        __that.find('svg').toggleClass('rotate-90');


    });


});

