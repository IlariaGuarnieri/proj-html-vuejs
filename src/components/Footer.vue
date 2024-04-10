<script>
import {store} from '../data/store';
export default {
  props:{
    arrayFooter: Array,
  },
  data() {
    return {
      store,
      // arrayFooter:['+1(305)1234-5678','hello@example.com','Main Avenue, 987']
    }
  },
  computed:{
    socialMenu(){
      return FooterInfo.social
    }
  }
}

</script>

<template>
<div class="container_footer">
  <div class="container_sx">
    <!-- footer  sinistra-->
    <div class="contain-footer text-center mt-5">
      <h5>SEND A MESSAGE</h5>
      <h1>Get in Touch</h1>
      <p>We will respond to your message as soon as possible</p>

      <div class="row">
        <div class="col d-flex info_name me-4">
          <input  type="text" class="form-control me-4" placeholder="Name" aria-label="Name">
          <input type="email" class="form-control" placeholder="Email" aria-label="Email"> 
        </div>
      </div>

        <div class="row">
          <div class="col d-flex info_number me-4 mt-2">
          <input type="text" class="form-control me-4" placeholder="Phone">
          <input type="text" class="form-control" placeholder="More info" aria-label="info">
        </div>
      </div>

      <div class="info_textarea me-4">
        <textarea class="form-control mt-2" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
      </div>

      <div class="btnn-sx">
        <button class="green-btn btn mt-3">SEND</button>
      </div>
      
  </div>
  </div>

<!-- footer destra -->

  <div class="container_dx pt-5 ">
    <h3>Example Inc.</h3>
    <p>Lorem, ipsum dolor sit amet consectetur <br>adipisicing elit.</p>
    <p>Lorem, ipsum dolor sit amet consectetur <br> adipisicing elit.</p>

    <!-- <div class="green"> -->
      <!-- ciclo le icone il cui array di oggetti è in store.js -->
      <!-- <p v-for="(item, index) in store.social" :key="`s-${index}`"> <a href="" v-html="item.text"> </a></p>
      <p v-for="(item, index) in arrayFooter" :key="index"> {{item}}</p>

    </div> -->

    <div class="green">
  <!-- ciclo le icone il cui array di oggetti è in store.js -->
      <p v-for="(item, index) in store.social" :key="`s-${index}`" v-html="item.text"></p>
    </div>

    <div class="green">
      <div v-for="(item, index) in store.arrayFooter" :key="index">
        <p style="display: inline-block; margin-right: 10px;">
          <i class="fa-solid" :class="item.iconClass"></i> {{store.item}}
        </p>
      </div>
    </div>


    

  </div>
</div>


</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/partials/variables';

// footer destra
.container_footer{
display:flex;
}
.container_dx{
  width: 40%;
  height:400px;
  background-color: rgb(0, 0, 0);
  h3{
    color: white;
    font-size: 18px;
  }
  p{
    color: #AEB1BC;
    font-size: 13px;
  }
  button{
    border: 1px solid $nav-color;
    color: white;
    font-size: 12px;
    height: 30px;
  }
  .green p{
    color: $nav-color;
  }
}

  
// footer sinistra

.container_sx{
  width: 60%;
  height:400px;
  background-color: black;
  .contain-footer{
  color:white;
  }
  h5{
    color: $nav-color;
    font-size: 15px;
  }
  h1{
    color:white;
    font-weight: bolder;
  }
  p, h1, h5{
    text-align: left;
    margin-left: 200px;
  }
  p{
    color:#AEB1BC;
  }
  .info_name, .info_number{
    width: 100%;
    margin-left: 200px;
  }
  input, textarea{
    background-color: #1D1D23;
    border:#1D1D23;
  }
  input::placeholder,
  textarea::placeholder{
    font-size: 13px;
    color:#72747a;
  }
  .info_textarea{
    margin-left: 200px;
  }
  button{
      color: white;
      font-size: 12px;
      height: 30px;
      background-color: $nav-color;
      
  }
  .btnn-sx{
    text-align: left;
    margin-left: 200px;
}
}

</style>