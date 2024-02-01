$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none;"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" title="Ver Imagem em tamanho real" target="_blank">
                    Ver Imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(750);
        $('#endereco-imagem-nova').val('')
    })
})