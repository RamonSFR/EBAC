const form = document.querySelector('#form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado">'
let linhas = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputNomeAtividade = document.querySelector('#nome-atividade');
    const inputNotaAtividade = document.querySelector('#nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
})