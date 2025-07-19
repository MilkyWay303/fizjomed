<template>
  <div class="navbar">
    <nav class="navbar_nav">
      <div>
        <img class="fizjomed_nav" src="../assets/fizjomed_logo_2_bg.png" alt="fizjomed_logo">
      </div>
      <div>
        <router-link to="/">O nas</router-link> 
        <a href="#oferta">Oferta</a> 
        <router-link to="/nasz-zespol">Nasz zepół</router-link>  
        <router-link to="/galeria">Galeria</router-link> 
        <router-link to="/cennik">Cennik</router-link>  
        <router-link to="/kontakt">Kontakt</router-link> 
      </div>
      <div>
        <a href="https://www.facebook.com/grfizjomed/?locale=pl_PL" target="_blank">
          <svg fill="#000000" width="283px" height="35px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></g></svg>
        </a>
      </div>
    </nav>
    
  </div>
</template>

<style scoped> 

  .navbar {
    height: 130px;
    /* width: auto; */
    background-color: rgb(240, 128, 0);
    /* margin: 0 20px 50px 20px; */
    place-content: center;
    /* border-style: solid;
    border-top: none;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-width: 2px;
    border-color: rgb(90, 89, 89); */
  }

  .navbar_nav{
    display: flex;
    place-items: center;
    place-content: space-between;
  }

  .fizjomed_nav {
    height: 80px;
    padding-left: 10px;
  }

  a {
    margin: 0 0 0 25px;
    font-size: 32px;
    text-decoration: none;
    transition-duration: 0.3s;
    color: black;  
  }

  a:hover {
    color: #005d5d;
  }
</style>