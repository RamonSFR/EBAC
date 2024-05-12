<script setup>
import { reactive } from 'vue';

const nome = "Ramon";
const meuObj = {
  nome: "Ramon",
  idade: 19,
  filmeFavorito: "Clube da Luta",
}

function dizOi(nome) {
  return `${nome} diz oi`;
}

const imgBatman = 'https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg'
const imgSuperman = 'https://rollingstone.uol.com.br/media/uploads/2024/03/james-gunn-revela-primeira-imagem-e-anuncia-novo-titulo-de-superman-legacy-foto-reproducaodc-comics.jpg'
const botaoEstaDesabilitado = false;

const gostaDoBatman = false;
const gostaDoSuperman = false;

const estaAutorizado = true;

// let contador = 0;
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['gian', 'paulo', 'luiza', 'mônica'],
  nomeAInserir: '',
})

function incrementarContador() {
  estado.contador++;
}

function decrementarContador() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value;
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function validaValorTransferencia() {
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}

function cadastraNome() {
  if (estado.nomeAInserir.length >= 3) {
    estado.nomes.push(estado.nomeAInserir);
    estado.nomeAInserir = '';
  } else {
    alert('Nome precisa ter no mínimo 3 caracteres!');
  }
  
}


</script>

<template>
  <h1>{{meuObj.filmeFavorito}}</h1>
  <h2>{{dizOi('Ramon') }}</h2>

  <img v-if="gostaDoBatman":src="imgBatman" alt="Imagem do Batman">
  <img v-else-if="gostaDoSuperman":src="imgSuperman" alt="Imagem do Superman">
  <h2 v-else>Não curte herois da DC</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não possui acesso</h1>

  <button :disabled="!botaoEstaDesabilitado">Enviar Mensagem</button>

  <br>
  <hr>

  {{ estado.contador }} 

  <button @click="incrementarContador" type="button">+</button>
  <button @click="decrementarContador" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}
  <br>
  <!-- <input placeholder="digite seu email" type="email" @keyup="evento => estado.email = evento.target.value"> -->
  <input placeholder="digite seu email" type="email" @keyup="alteraEmail">

  <br>
  <hr>
  
  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferencia: {{ mostraSaldoFuturo() }} <br>
  <input class="campo" :class="{ invalido:!validaValorTransferencia()}" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">
  <button v-if="validaValorTransferencia()">Transefir</button>
  <span v-else>Valor maior do que o saldo!</span>

  <br>
  <hr>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>

  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar nome</button>

</template>

<style scoped>
  img {
    height: 200px;
  }

  .invalido {
    outline-color: red;
    border-color: red;
  }

  .campo {
    border: 2px solid #000;
  }
</style>
