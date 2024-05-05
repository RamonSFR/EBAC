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
</template>

<style scoped>
  img {
    height: 200px;
  }
</style>
