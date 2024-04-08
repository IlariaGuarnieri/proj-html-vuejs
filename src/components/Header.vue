<script>
import {store} from '../data/store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
  data() {
    return {
      store
    }
  },
  
}
</script>

<template>
  <div class="text-center">

    <div class="top-header d-flex">
      <p><i class="fa-solid fa-clock"></i> Open Hours: mon-sat - 9.00 - 18.00</p>
      <p> <i class=" telefono fa-solid fa-phone"></i> +1 (305)1234-5678</p>
      <p> <i class="fa-solid fa-envelope"></i> hello@example.com</p>
      <p><i class=" social fa-brands fa-facebook"></i>  <i class=" social fa-brands fa-twitter"></i>  <i class=" social fa-brands fa-linkedin-in"></i></p>
    </div>
    
    <div class="jumbotron">
<!-- navbar trasparente -->
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <p class="first">NEX</p> <p class="second" >GEN</p>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">HOME</a>
              <a class="nav-link" href="#">ABOUT</a>
              <a class="nav-link" href="#">PROJECTS</a>
              <a class="green nav-link" href="#">PROCESS</a>
              <a class="nav-link" href="#">TESTIMONIALS</a>
              <a class="nav-link" href="#"><i class="fa-regular fa-user"></i></a>
              <button class=" green-btn btn">GET IN TOUCH</button>
            </div>
          </div>
        </div>
      </nav>

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
  }
  .social{
    margin-right: 15px;
  }
}

.jumbotron{
  height: 650px;
  width: 100%;
  background-image: url(../../src/assets/scss/img/bg-4.jpg);
  object-fit: cover;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.7);
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
}
  .first, .second{
    margin-top:15px;
  }
  a{
    color:white;
    margin-right:20px;
  }
  .navbar-nav{
    margin-left: 100px;
  }
  .container-fluid{
    margin-left:180px;
  }


</style>