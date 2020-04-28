$(document).ready(function () {
    $("#menu, #product-page-menu").click(function () {
        $("#menu-page").show();
        $("#home-page").hide();
        $("#product-page").hide();
    });
    $("#hero1912-close").click(function () {
        $("#menu-page").hide();
        $("#home-page").show();
    });
    $("#hero1912-next").click(function () {
        $("#menu-page").hide();
        $("#home-page").hide();
        $("#product-page").show();
    });
    $("#hero1913-back, #hero1913-change").click(function () {
        $("#home-page").show();
        $("#product-page").hide();
    });
});