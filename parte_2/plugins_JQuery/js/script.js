$(document).ready(() => {
    $('#images-carousel').slick({ autoplay: true, });
    
    $('.menu-hamburguer').click(() => {
        $('nav').slideToggle('fast');
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
});