$(function() {
    
    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    checkscroll(scrollPos, introH);
    
    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        checkscroll(scrollPos, introH);
    });
    
    function checkscroll() {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }   
    }
    
    
    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); /*Отмена стандартного поведения нашего элемента*/
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700)
    });
    
    
    
    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
    
    
    /* Reviews https://kenwheeler.github.io/slick/*/
    
    let slider = $("#reviewsSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
    });
    
    
    
    
});