$(document).ready(function () {
    // Carousel control button
    $('#my-carousel').carousel({
        interval: 20000
    });
    $('#myCarouselButton').click(function (e) {
        if ($('#myCarouselButton').children('span').hasClass('fa-pause')) {
            $('#my-carousel').carousel('pause');
            $('#myCarouselButton').children('span').removeClass('fa-pause');
            $('#myCarouselButton').children('span').addClass('fa-play');
        } else if ($('#myCarouselButton').children('span').hasClass('fa-play')) {
            $('#my-carousel').carousel('cycle');
            $('#myCarouselButton').children('span').removeClass('fa-play');
            $('#myCarouselButton').children('span').addClass('fa-pause');
        }
    });
    // Carousel control button

    // Login Modal button
    $('#showLoginModal').click(function (e) {
        $('#loginModal').modal('show');
    });
    // Login Modal button

    // Reserve a Table Modal button
    $('#showReserveTableModal').click(function (e) {
        $('#reserveTableModal').modal('show');
    });
    // Reserve a Table Modal button
});

/*         $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
        })
 */