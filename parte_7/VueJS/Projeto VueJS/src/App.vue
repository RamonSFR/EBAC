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
const botaoEstaDesabilitado = false;
</script>

<template>
  <h1>{{meuObj.filmeFavorito}}</h1>
  <h2>{{dizOi('Ramon') }}</h2> <!--Mustashes-->
  <img v-bind:src="imgBatman" alt="Imagem do Batman"> <!--Binds-->
  <button :disabled="!botaoEstaDesabilitado">Enviar Mensagem</button>
</template>

<style scoped>

</style>
