<script setup>
import { ref, computed } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

header {
  display: flex;
  justify-content: center;
  /* position: absolute; */
  /* top: 0; */
  /* margin: 15px auto 15px auto; */
  /* inset: 1px; */
}

main {
  display: flex;
  justify-content: center;
  height: 100vh;
}

/* main {
  height: 50vh;
} */

footer {    
  display: flex;
  justify-content: center;
  bottom: 0;
  /* position: absolute; */
  /* width: 100vw; */
  /* margin: 15px auto 15px auto; */
  /* inset: 1px; */
}

/* footer {
  position: absolute;
  bottom: 5%;
  place-items: center;
  display: flex;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
