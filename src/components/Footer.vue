<script>
import {store} from '../data/store'
export default {
  data() {
    return {
      store
    }
  },
  
}
</script>

<template>
  <div class="contain-footer text-center my-5">
    <h5>SEND A MESSAGE</h5>
    <h1>Get in Touch</h1>
    <p>We will respond to your message as soon as possible</p>

    <div>
      <input type="text" placeholder="Name"> 
      <input type="email" placeholder="Email">
    </div>

    <div>
      <input type="text" placeholder="Phone"> <div class="dropdown">
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div>
      <input type="textarea">
    </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/partials/variables';

.contain-footer{
  background-color: black;
  color:white;
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
  .form-select{
    width: 200px;
  }
}

</style>