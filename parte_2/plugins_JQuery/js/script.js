$(document).ready(() => {
    $('#images-carousel').slick({ autoplay: true, });
    
    $('.menu-hamburguer').click(() => {
        $('nav').slideToggle('fast');
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            },
            messages: {
                nome: 'Por favor, insira seu nome'
            },
            submitHandler: function (form) {
                console.log(form);
            },
            invalidHandler: (evento, validador) => {
                let camposIncorretos = validador.numberOfInvalids();
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).siblings('h3').text();
        $('#veiculoInteresse').val(nomeVeiculo);

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});