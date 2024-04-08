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
    NAVBAR +
    JUMBOTRON
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

</style>