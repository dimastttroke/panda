wow = new WOW({
    mobile: false
});
wow.init();

$(document).ready(function() {

    /* COLLAPSE */
    $(".more-collapse-content > div > div:last-child").slideUp(100);
    $(".more-collapse-content > div > div:first-child").click(function (e) {
        e.preventDefault();
        var $tab = $(this).parent();
        var is_single = $tab.parent().hasClass("single");
        $tab.toggleClass("open");
        $tab.children(":last-child").slideToggle("slow");
        if (is_single) {
            $tab.siblings().removeClass("open");
            $tab.siblings().children(":last-child").slideUp("slow");
        }
    });

    /* ПЛАВНЫЙ СКРОЛЛ */
    $(".anchor").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    /* МОБИЛЬНОЕ МЕНЮ */
    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('.mobile__menu').slideToggle();
    });

    /* МАСКА НОМЕРОВ */
    $(".phone-mask").mask("9(999)999-99-99");

});