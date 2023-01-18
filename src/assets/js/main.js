$(document).ready(function () {

    $(".nav_hover").hover(function () {
        $(this).find('.inner_nav_contents').toggleClass('hidden');
    });

    // Add click events to show faq group
    $("#questions div.questions_inner_container .card .head").click(function () {
        let __that = $(this).parent();
        __that.find('.inner').slideToggle();
        __that.find('svg').toggleClass('rotate-45');
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

