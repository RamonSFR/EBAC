// No Jquery

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector('#btn-buscar-cep').addEventListener("click", () => {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.querySelector('#cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();

//     })
// });


// Jquery

$(document).ready(() => {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(() => {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $('#btn-buscar-cep');
        
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        // $.ajax(endpoint).done((resposta) => {
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${logradouro} - ${bairro} - ${cidade} - ${estado}`;
        //     $('#endereco').val(endereco);

        //     setTimeout(() => {
        //         $(botao).find('i').removeClass('d-none');
        //         $(botao).find('span').addClass('d-none');
        //     }, 2000);
        // })

        // Fetch API

        fetch(endpoint).then((resposta) => {
            return resposta.json();
        })
        .then((json) => {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro} - ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
        })
        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde");    
        })
        .finally(function () {
            setTimeout(() => {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000);
        })
    });

    $('#formulario-pedido').submit((e) => {
        e.preventDefault();
        if ($('#nome').val().length == 0) { 
            throw new Error('Digite o nome');
        }
    })
})