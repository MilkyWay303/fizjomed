<template>
  <div class="navbar">
    <div class="navbar_logo">
      <svg class="curve" width="64px" height="64px" viewBox="0 0 100 100"><path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F6EE"></path></svg>
      
      <img class="fizjomed_nav" src="../assets/fizjomed_logo_2.png" alt="fizjomed_logo">
      
      <svg class="curve_2" width="64px" height="64px" viewBox="0 0 100 100"><path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F6EE"></path></svg>
      
    </div>
    
    <nav class="navbar_nav">
      <router-link to="/">O nas</router-link> 
      <router-link to="/oferta">Oferta</router-link> 
      <router-link to="/nasz-zespol">Nasz zepół</router-link>  
      <router-link to="/galeria">Galeria</router-link> 
      <router-link to="/cennik">Cennik</router-link>  
      <router-link to="/kontakt">Kontakt</router-link> 
      <a href="https://www.facebook.com/grfizjomed/?locale=pl_PL" target="_blank">
        <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></g></svg>
      </a>
    </nav>
    
  </div>
</template>

<style scoped> 
  .curve_2 {
    position: absolute;
    top: 0;
  }

  .curve {
    position: absolute;
    bottom: -57px;
  }

  .navbar {
    display: flex;
    position: absolute;
    z-index: 10;
  }

  .navbar_nav {
    height: 60px;
    background-color: rgba(250, 249, 219, 0.816);
    padding: 20px;
    border-radius: 50px;
    place-content: center;
    place-items: center;
    display: flex;
    position: static;
    margin: 25px 0 0 25px;
    /* min-width: 990px; */
    /* margin-bottom: 50px; */
    /* border-radius: 24px; */
  }

  /* .navbar_logo {
    display: flex;
    position: static;
  } */
 
  .fizjomed_nav {
    border-bottom-right-radius: 50px;
    width: 350px;
    position: relative;
  }

  a {
    margin: 0 0 0 15px;
    font-size: 25px;
    text-decoration: none;
    transition-duration: 0.3s;
    color: black;
    
  }

  a:hover {
    color: #005d5d;
  
  }
</style>