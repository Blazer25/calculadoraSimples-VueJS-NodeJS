<template>
  <div id="navbar">
    <ul class="nav-list">
      <li>
        <router-link to="/">
          <i class="fa-solid fa-x"></i>
          <span class="nav-item logo">Calculadora</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <i class="fa-solid fa-house-chimney"></i
          ><span class="nav-item">Inicio</span></router-link
        >
      </li>
      <li>
        <router-link to="/Simples"
          ><i class="fa-solid fa-calculator"></i>
          <span class="nav-item">Calculadora Simples</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>

/* NavBar */
#navbar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 90px;
  background: var(--deep-purple);
  overflow: hidden;
  transition: width 0.2s linear;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
}

#navbar:hover {
  width: 300px;
  transition: all 0.5s ease;
}

/* logo */
.nav-list li a {
  position: relative;
  color: var(--light-purple);
  transition: 0.3s;
  font-size: 20px;
  display: table;
  width: 300px;
  padding: 12px;
}

a:hover {
  opacity: 0.7;
}

.fa-solid {
  position: relative;
  width: 70px;
  height: 40px;
  top: 14px;
  font-size: 20px;
  text-align: center;
}

.logo {
  font-weight: bold;
  font-size: 21px;
  text-transform: uppercase;
}

.nav-item {
  position: relative;
  top: 12px;
  margin-left: 10px;
}

/* Media Responsiva*/
@media (max-width: 700px) {
  #navbar {
    width: 60px;
    height: 100%;
  }

  #navbar:hover {
    width: 220px;
    transition: all 0.5s ease;
  }

  .nav-list li a {
    width: 220px;
    font-size: 15px;
    padding: 8px;
  }

  .fa-solid {
    width: 50px;
    height: 20px;
    top: 12px;
    font-size: 15px;
  }

  .logo {
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
  }

  .nav-item {
    position: relative;
    top: 12px;
    margin-left: 10px;
  }
}
</style>