<template>
  <div class="navbar">
    <div class="navbar_container">
      <nav id="nav_bar" class="btns_nav">
        <ul>
          <li>
            <a id="close_bar" @click="close_bar()">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <img class="fizjomed_img" src="../assets/fizjomed_logo_2_bg.png" alt="fizjomed_logo">
          </li>
          <li>
            <router-link to="/">O nas</router-link> 
          </li>
          <li>
            <router-link to="/oferta">Oferta</router-link> 
          </li>
          <li>
            <router-link to="/nasz-zespol">Nasz zepół</router-link>  
          </li>
          <li>
            <router-link to="/galeria">Galeria</router-link> 
          </li>
          <li>
            <router-link to="/cennik">Cennik</router-link>  
          </li>
          <li>
            <router-link to="/kontakt">Kontakt</router-link> 
          </li>
        </ul>
      </nav>
      <a @click="open_bar()" class="btn_nav" id="open_bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
      </a>
      <!-- <div>
        <a href="https://www.facebook.com/grfizjomed/?locale=pl_PL" target="_blank">
          <svg fill="#000000" width="283px" height="35px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></g></svg>
        </a>
      </div> -->
    </div>
    
  </div>
</template>

<style scoped> 

@media screen and (max-width: 1000px) {
  
  .btn_nav{
    display: block;
    border: none;
    padding: 1em;
    margin-left: auto;
    cursor: pointer;
  }


  .navbar {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: min(15em, 100%);
    background-color: #f9f6ee;
    /* place-content: center; */
    transition: right 300ms ease-out;
    /* z-index: 10; */
  }

  .show{
    right: 0;
  }

  ul {
    width: 100%;
    flex-direction: column;
  }
  
  a {
    width: 100%;
    padding-left: 2.5em;
  }

  .fizjomed_img {
    height: 3rem;
    /* margin-right: 10px; */
  }
}

/* .btn_nav {
    display: block;
  }

.btns_nav {
 
  display: grid;

}


.navbar_container{
  place-items: center;
  max-width: 1100px;
  justify-content: space-between;
  margin: auto;
  padding: 0 30px 0 30px;
  display: flex;
}




ul {
  margin: 0 0 0 45px;
  font-size: 18px;
  text-decoration: none;
  transition-duration: 0.3s;
  color: black;  
  list-style: none;
  display: flex;
}

a {
  margin: 0 0 0 45px;
  font-size: 18px;
  text-decoration: none;
  transition-duration: 0.3s;
  color: black;  
}

a:hover {
  color: #741B1B;
} */



/* @media (min-width: 1000px) {

.btn_nav {
    display: none;
  }

.btns_nav {
  display: block;
}


.navbar {
  height: 100px;
  width: 100%;
  background-color: #f9f6ee;
  margin: 20px auto 10px auto;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  place-content: center;
}

.navbar_container{
  place-items: center;
  max-width: 1100px;
  justify-content: space-between;
  margin: auto;
  padding: 0 30px 0 30px;
  display: flex;
}

.fizjomed_img {
  height: 4rem;
  margin-right: 10px;
}

a {
  margin: 0 0 0 45px;
  font-size: 18px;
  text-decoration: none;
  transition-duration: 0.3s;
  color: black;  
}

a:hover {
  color: #741B1B;
}

} */

@media (min-width: 768px) {

}

@media screen and (min-width: 1000px) {

.pp {
  display: none;
}

.fizjomed_img {
  height: 4rem;
  margin-right: 10px;
}

ul {
  margin: 0 0 0 45px;
  font-size: 18px;
  text-decoration: none;
  transition-duration: 0.3s;
  color: black;  
  list-style: none;
  display: flex;
}

li {
  place-content: center;
}

.navbar_container{
  place-items: center;
  max-width: 1100px;
  justify-content: space-between;
  margin: auto;
  padding: 0 30px 0 30px;
  display: flex;
}

.navbar {
  height: 100px;
  width: 100%;
  background-color: #f9f6ee;
  margin: 20px auto 10px auto;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  place-content: center;
}

a {
  margin: 0 0 0 45px;
  font-size: 18px;
  text-decoration: none;
  transition-duration: 0.3s;
  color: black;  
}
}


/* *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul{
  list-style: none;
  display: flex;
}

nav .fizjomed_img{
  margin-right: auto;
  height: 4rem;
} */

</style>

<script setup>
import { ref } from 'vue'
const navbar = ref(null)

// const navbar = document.getElementById("nav_bar")

// function open_bar(){
//   navbar.value.classList.add("show")
// }  

// function close_bar(){
//   navbar.value.classList.remove("show")    
// }


function open_bar() {
  if (navbar.value) {
    navbar.value.classList.add("show")
  }
}

function close_bar() {
  if (navbar.value) {
    navbar.value.classList.remove("show")
  }
}
</script>