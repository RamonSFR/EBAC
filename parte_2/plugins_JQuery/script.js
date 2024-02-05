$(document).ready(() => {
    $('#images-carousel').slick({ autoplay: true, });
    
    $('.menu-hamburguer').click(() => {
        $('nav').slideToggle('fast');
    })
});