$(document).ready(function(){
    $("ul a").click(function(event){
        event.preventDefault();
        console.log(event);
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body, html").animate({scrollTop: top}, 800);
    });

    $(".nav").css("display", "block");
    $(".nav").css("right", "-" + $(".nav").width() + "px");
    $(".header__nav-btn").click(function(){
        $(this).toggleClass("header__nav-btn_active");
        $(".nav").toggleClass("nav_active");
    });
});