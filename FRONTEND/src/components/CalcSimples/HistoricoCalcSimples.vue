<template>
  <div id="container">
    <div
      class="historico-row"
      v-for="operacao in operacoesCalcSimples"
      :key="operacao.id"
    >
      <div class="parte-n1">{{ operacao.num1 }}</div>
      <div class="parte-op">{{ operacao.operadormat }}</div>
      <div class="parte-n2">{{ operacao.num2 }}</div>
      <div class="parte-igual">=</div>
      <div class="parte-res">{{ operacao.resultado }}</div>
      <button class="btn-delete" @click="removerOperacao(operacao._id)">
        X
      </button>
    </div>
  </div>
</template>

<script>
import operacoes from "../../../services/operacoes";

export default {
  name: "HistoricoCalcSimples",
  components: {},
  data() {
    return {
      operacoesCalcSimples: [],
    };
  },
  methods: {
    //Remover Operação pelo ID.
    removerOperacao(_id) {
      operacoes.apagar(_id);

      //Depois da remoção, irá listar os itens novamente.
      operacoes.listar().then((res) => {
        this.operacoesCalcSimples = res.data;
      });
    },
  },
  mounted() {
    //Irá montar os itens do histórico.
    operacoes.listar().then((res) => {
      console.log(res.data);
      this.operacoesCalcSimples = res.data;
    });
  },
};
</script>

<style scoped>
div {
  padding: 2px;
  margin: 2px;
}

#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
}

.historico-row {
  width: 220px;
  height: 50px;
  padding: 10px;
  border: 3px solid;
  margin: 1px;
  display: flex;
  justify-content: center;
}

.historico-row .btn-delete {
  width: 40px;
  text-align: center;
  margin-left: 20px;
  background: red;
  border: 1px solid black;
  cursor: pointer;
}

/* Media Responsiva*/
@media (max-width: 700px) {
  #container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;
    margin: 0 auto;
  }
}
</style>