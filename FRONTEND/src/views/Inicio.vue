<template>
  <div id="home">
    <div class="container">
      <button class="btn-intro" @click="sendMsg($event), closeMsg($event)">
        Clique Aqui!
      </button>
    </div>
    <p><Mensagem :mensagem="mensagem" v-show="mensagem" /></p>
  </div>
</template>

<script>
import Mensagem from "../components/Mensagem.vue";

export default {
  name: "Inicio",
  components: {
    Mensagem,
  },
  data() {
    return {
      mensagem: null,
      textMsg: null,
    };
  },
  methods: {
    sendMsg() {
      const textMsg =
        "A seguinte aplicação, desenvolvida com HTML5, CSS3, VueJS3, NodeJs, tem como função apresentar uma calculadora simples, com as opções de multiplicar, dividir, subtrair e somar dois números. Clique no menu ao lado esquerdo para se direcionar até a calculadora.";
      this.mensagem = textMsg;
    },
    closeMsg() {
      setTimeout(() => (this.mensagem = ""), 11500);
    },
  },
};
</script>

<style scoped>
#home .container {
  width: 100%;
  height: 100%;
}

#home .container .btn-intro {
  cursor: pointer;
  border: 3px solid var(--light-purple);
  background: var(--deep-purple);
  color: var(--light-purple);
  font-size: 40px;
  padding: 10px;
  margin: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 700px) {
  #home .container .btn-intro {
    font-size: 20px;
    padding: 2px;
    margin-left: 25%;
  }
}
</style>
