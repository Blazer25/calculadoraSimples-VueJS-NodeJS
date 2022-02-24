<template>
  <div id="nav">
    <Navbar />
    <router-view/>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
// import operacoes from './services/operacoes.js'

export default {
  name:'App',
components:{
    Navbar,
}
    
  }

</script>

<style>

:root{
  --deep-purple: #492E75;
  --light-purple:#C7AAF7;
  --verylight-purple: #e3d1ff;
  --50-purple: #8A40C9;
  --medium-purple:#674D7D;
}

* {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

body{
  background: var(--verylight-purple);
}

</style>
