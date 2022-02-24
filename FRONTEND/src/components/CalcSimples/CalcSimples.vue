<template>
  <div id="container">
    <form name="CalculadoraSimples" @submit.prevent="Salvar">
      <div>
        <input
          type="text"
          class="text main-color"
          name="textvisor"
          disabled
          v-model="NumerosConcatenados"
        />
        <input
          type="button"
          class="numberC main-color"
          name="textC"
          value="C"
          @click="Limpar"
        />
      </div>
      <br />

      <input
        type="button"
        class="number main-color"
        name="button9"
        value="9"
        @click="ConcatenarNum('9')"
      />
      <input
        type="button"
        class="number main-color"
        name="button8"
        value="8"
        @click="ConcatenarNum('8')"
      />
      <input
        type="button"
        class="number main-color"
        name="button7"
        value="7"
        @click="ConcatenarNum('7')"
      />
      <input
        type="button"
        class="number plus"
        name="buttonPlus"
        value="+"
        @click="Somar"
      />
      <br />

      <input
        type="button"
        class="number main-color"
        name="button6"
        value="6"
        @click="ConcatenarNum('6')"
      />
      <input
        type="button"
        class="number main-color"
        name="button5"
        value="5"
        @click="ConcatenarNum('5')"
      />
      <input
        type="button"
        class="number main-color"
        name="button4"
        value="4"
        @click="ConcatenarNum('4')"
      />
      <input
        type="button"
        class="number less"
        name="buttonLess"
        value="-"
        @click="Subtrair"
      /><br />

      <input
        type="button"
        class="number main-color"
        name="button3"
        value="3"
        @click="ConcatenarNum('3')"
      />
      <input
        type="button"
        class="number main-color"
        name="button2"
        value="2"
        @click="ConcatenarNum('2')"
      />
      <input
        type="button"
        class="number main-color"
        name="button1"
        value="1"
        @click="ConcatenarNum('1')"
      />
      <input
        type="button"
        class="number mult"
        name="buttonMult"
        value="*"
        @click="Multiplicar"
      />
      <br />

      <input
        type="button"
        class="number dot"
        name="buttonDot"
        value="."
        @click="AddPonto"
      />
      <input
        type="button"
        class="number main-color"
        name="button0"
        value="0"
        @click="ConcatenarNum('0')"
      />
      <input
        type="button"
        class="number equal"
        name="buttonEqual"
        value="="
        @click="Resultado"
      />
      <input
        type="button"
        class="number cut"
        name="buttonCut"
        value="/"
        @click="Dividir"
      />
      <br />
      <router-link to="/Simples/Historico-Calculadora-Simples">
        <button class="historic number">Histórico</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import operacoes from "../../../services/operacoes";
export default {
  name: "CalcSimples",
  data() {
    return {
      NumAnterior: null,
      OpMat: null,
      OpMatClicado: false,
      NumerosConcatenados: "",
      operadorEscrito: "",

      //Objeto que irá guardar os dados que serão enviados para a API
      salvarHistoricoResultado: {
        num1: null,
        num2: null,
        operadormat: "",
        resultado: null,
      },
    };
  },
  methods: {
    //Irá limpar o visor
    Limpar() {
      this.NumerosConcatenados = "";
    },

    //Irá escrever e juntar os números no visor
    ConcatenarNum(num) {
      const numero2 = num;
      //Salvar números no histórico
      this.salvarHistoricoResultado.num1 = this.NumerosConcatenados;
      this.salvarHistoricoResultado.num2 = numero2;

      //Concatenar os números
      if (this.OpMatClicado) {
        this.NumerosConcatenados = "";
        this.OpMatClicado = false;
      }
      this.NumerosConcatenados = `${this.NumerosConcatenados}${num}`;
    },

    //Configura o ponto para números flutuantes
    AddPonto() {
      if (this.NumerosConcatenados.indexOf(".") === -1) {
        this.ConcatenarNum(".");
      }
    },

    //Setar os valores
    SetarValorVisor() {
      this.NumAnterior = this.NumerosConcatenados;
      this.OpMatClicado = true;
    },

    //Configura o botão igual(=)
    Resultado() {
      this.NumerosConcatenados = `${this.OpMat(
        parseFloat(this.NumAnterior),
        parseFloat(this.NumerosConcatenados)
      )}`;

      this.NumAnterior = null;

      //salvar no histórico
      this.salvarHistoricoResultado.resultado = this.NumerosConcatenados;

      if (this.operadorEscrito.includes("div")) {
        this.salvarHistoricoResultado.operadormat = "/";
      } else if (this.operadorEscrito.includes("mult")) {
        this.salvarHistoricoResultado.operadormat = "x";
      } else if (this.operadorEscrito.includes("menos")) {
        this.salvarHistoricoResultado.operadormat = "-";
      } else {
        this.salvarHistoricoResultado.operadormat = "+";
      }

      //Enviar para  API e realizar o salvamento
      operacoes.salvar(this.salvarHistoricoResultado).then((res) => {
        console.log("Salvo" + res);
      });
    },

    //Configura o botão de divisão(/)
    Dividir() {
      console.log;

      this.OpMat = (num1, num2) => num1 / num2;
      this.SetarValorVisor();
      this.operadorEscrito = "div";
    },

    //Configura o botão de multiplicação(*)
    Multiplicar() {
      this.OpMat = (num1, num2) => num1 * num2;
      this.SetarValorVisor();
      this.operadorEscrito = "mult";
    },

    //Configura o botão de subtração(-)
    Subtrair() {
      this.OpMat = (num1, num2) => num1 - num2;
      this.SetarValorVisor();
      this.operadorEscrito = "menos";
    },

    //Configura o botão de soma(+)
    Somar() {
      this.OpMat = (num1, num2) => num1 + num2;
      this.SetarValorVisor();
      this.operadorEscrito = "mais";
    },
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

input,
button {
  border: 3px solid black;
  color: white;
  font-size: 25px;
}

.number {
  width: 65px;
  height: 65px;
  margin: 1px;
  cursor: pointer;
}

.main-color {
  background: var(--deep-purple);
}

.plus,
.less,
.mult,
.cut,
.dot,
.equal {
  background: var(--50-purple);
}

.text {
  margin-top: 100px;
  height: 65px;
  width: 200px;
  text-align: center;
}

.numberC {
  width: 65px;
  height: 65px;
  margin: 2px;
  cursor: pointer;
}

.historic {
  width: 268px;
  background: var(--medium-purple);
}

/* Media Responsiva*/
@media (max-width: 700px) {

input,
button {
  border: 3px solid black;
  color: white;
  font-size: 18px;
}

.number {
  width: 35px;
  height: 35px;
  margin: 1px;
  cursor: pointer;
}


.text {
  margin-top: 50px;
  height: 35px;
  width: 110px;
  text-align: center;
}

.numberC {
  width: 35px;
  height: 35px;
  margin: 2px;
  cursor: pointer;
}

.historic {
  width: 148px;
  background: var(--medium-purple);
}

}

</style>