<script setup>
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
const gostaDoSuperman = true;
</script>

<template>
  <h1>{{meuObj.filmeFavorito}}</h1>
  <h2>{{dizOi('Ramon') }}</h2> <!--Mustashes-->

  <img v-if="gostaDoBatman":src="imgBatman" alt="Imagem do Batman">
  <img v-else-if="gostaDoSuperman":src="imgSuperman" alt="Imagem do Superman">
  <h2 v-else>Não curte herois da DC</h2>

  <button :disabled="!botaoEstaDesabilitado">Enviar Mensagem</button>
</template>

<style scoped>
  img {
    height: 200px;
  }
</style>
