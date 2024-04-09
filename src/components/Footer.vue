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
<div class="container_footer">
  <div class="container_sx">
    <!-- footer -->
    <div class="contain-footer text-center my-5">
      <h5>SEND A MESSAGE</h5>
      <h1>Get in Touch</h1>
      <p>We will respond to your message as soon as possible</p>

      <div class="row">
        <div class="col input_name d-flex">
          <input type="text" class="form-control" placeholder="Name" aria-label="Name">
          <input type="email" class="form-control" placeholder="Email" aria-label="Email"> 
        </div>
        <div class="info mb-3 mt-3 d-flex">
        <input type="text" class="form-control" placeholder="Phone">
        <input type="text" class="form-control" placeholder="More infoe" aria-label="info">
      </div>
      <div class="mb-3">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div>
    </div>

    </div>
  </div>
  </div>

  <div class="container_dx">

  </div>
</div>

</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/partials/variables';

.container_footer{
display:flex;
}
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
  .col .input_name{
    width:180px;
    font-size:12px;
    margin-right: 10px;
  }
  .input_name, .info{
    margin-left:200px;
  }
  .info{
    width:180px;
  }
}


.container_dx{
  width: 40%;
  height:400px;
  background-color: rgb(190, 67, 67);
}
</style>