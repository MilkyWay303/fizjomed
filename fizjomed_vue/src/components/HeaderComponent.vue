<template>
  <div class="head">
    <div>
      <img src="../assets/fizjomed_logo.png" alt="fizjomed_logo">
    </div>
    <nav>
      <router-link to="/">O nas</router-link> 
      <router-link to="/oferta">Oferta</router-link> 
      <router-link to="/nasz-zespol">Nasz zepół</router-link>  
      <router-link to="/galeria">Galeria</router-link> 
      <router-link to="/cennik">Cennik</router-link>  
      <router-link to="/kontakt">Kontakt</router-link> 
    </nav>
  </div>
</template>

<style scoped> 
  .head {
    height: 115px;
    background-color: gray;
    width: 1590px;
    min-width: 990px;
    place-content: center;
    place-items: center;
    display: flex;
    /* border-radius: 24px; */
  }
 
  /* nav {
    display: flex;
  } */

  a {
    margin: 0 0 0 15px;
    font-size: large;
    text-decoration: none;
  }
</style>