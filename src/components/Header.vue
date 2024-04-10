<script>
import {store} from '../data/store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
  data() {
    return {
      store,
      arrayNavbar:['HOME','ABOUT','PROJECT','PROCESS'] //creo l'array per popolare dinamicamente la navbar (sul footer l'array è in store.js)
    }
  },
  
}
</script>

<template>
  <div class="text-center">
    <div class="top-header d-flex">
      <!-- stampato dinamicamente tramite un array di oggetti presente in store.js -->
      <p v-for="(item, index) in store.arrayNavbarr" 
        :key="`s-${index}`" 
        v-html="item.text"></p>
        <p><i class=" social fa-brands fa-facebook"></i>  <i class=" social fa-brands fa-twitter"></i>  <i class=" social fa-brands fa-linkedin-in"></i></p>
    </div>
  </div>
    
    <div class="jumbotron">
<!-- navbar trasparente -->
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <!-- logo fatto a mano -->
            <!-- <p class="first">NEX</p> <p class="second" >GEN</p> -->
          <img class="logo-nav" src="https://nexgen.codings.dev/wp-content/uploads/2021/03/logo.svg" alt="">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav d-flex ">
              <!-- dopo aver creato l'array lo ciclo tramite v-for e con le doppie graffe richiamo l'item che cicla gli elementi dell'array -->
              <a
              v-for="(item, index) in arrayNavbar" 
              :key="index" class="nav-link" href="#">{{ item }}</a>

              <a class="nav-link" href="#"><i class="fa-regular fa-user"></i></a>
              <button class=" green-btn btn">GET IN TOUCH</button>
            </div>
          </div>
        </div>
      </nav>
      <h5>HUMAN RESOURCES</h5>
      <h1>Get More <br> Productivity</h1>

      <div class="text-left">
        <span>Planning, recruitment and selection process and <br> performance evaluation of employees.</span>
      </div>

      <div class="cont-btn">
        <button class="junbo-btn green-btn btn">GET IN TOUCH</button>
        <button class="junbo-btn btn light-btn">READ MORE</button>
      </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/partials/variables';

.top-header{
  height:50px;
  background-color: $bc-color-header;
  color:rgb(245, 235, 235);
  align-items: center;
  justify-content: space-around;
  p{
    padding-left:60px;
    padding-top:10px;
  }
  .social{
    margin-right: 15px;
  }
}

.jumbotron{
  height: 600px;
  width: 100%;
  background-image: url(../../src/assets/scss/img/bg-4.jpg);
  object-fit: cover;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  .green-btn{
    background-color:$nav-color;
  }
  .green{
    color:$nav-color;
  }
  .logo-navbar{
    filter: invert(1);
  }
  .second{
    color:white;
    font-weight: bolder;
  }
  .first{
    color:$nav-color;
    background-color: $nav-color-transparent;
    height: 30px;
    border-top-left-radius: 30px;
    border-bottom-left-radius:30px;
    width:60px;
    padding-top: 2px;
    padding-left: 17px;
    font-weight: bolder;
    font-size: 1.1rem;
  }
  a{
    color:white;
    margin-right:20px;
  }
  .navbar-nav{
    margin-left: 100px;
    text-align: right;
    // justify-content: space-around;
  }
  .container-fluid{
    margin-left:180px;
  }
  .logo-nav{
    width: 100px;
  }
  h5{
    font-size: 15px;
    color:$nav-color;
    margin-top:80px;
    text-align: left;
    margin-left: 200px;
  }
  h1{
    font-weight: bolder;
    font-size: 50px;
    text-align: left;
    margin-left: 200px;
  }
  button{
    color: white;
    font-size: 15px;
    height: 35px;
  }
  .cont-btn, .text-left{
    text-align: left;
    margin-left: 200px;
  }
  .light-btn{
    border: 1px solid $nav-color;
    margin-left: 20px;
  }
  
}

.text-left{
margin-bottom: 20px;
color:#AEB1BC;
  }

</style>