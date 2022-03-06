document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("hamburger_menu").addEventListener("click", function(){
        this.classList.toggle("active");
    })
});

/*$(function() {
    $('.hamburger_menu').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.hamburger_menubox_SP').addClass('active');
        } else {
            $('.hamburger_menubox_SP').removeClass('active');
        }
    });
});*/