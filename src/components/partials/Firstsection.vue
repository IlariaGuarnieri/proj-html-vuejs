<script>
import { store } from '../../data/store';
export default {
  props:{
  },
  data() {
    return {
      store
    }
  },
  
}
</script>

<template>
<div class="backgorund">
  <div class="container_card d-flex m-5">

<div class="card me-4" style="width: 15rem; height:15rem;">
<div class="card-body">
<p class="icona"><i class="fa-solid fa-user-group"></i> </p>
<h5 class="card-title">Human Capital</h5>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos</p>
</div>
</div>
<div class="card me-4" style="width: 15rem;">
<div class="card-body">
<p class=" icona"><i class="fa-solid fa-chart-pie"></i></p>
<h5 class="card-title">Core Business</h5>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos</p>
</div>
</div>
<div class="card me-4" style="width: 15rem;">
<div class="card-body">
<p class="icona"><i class="fa-regular fa-clock"></i> </p>
<h5 class="card-title">Performance</h5>
<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos</p>
</div>
</div>

</div>
</div>
  
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/variables';

.background{
  background-color: #EEF4ED;
  width:300px;
}

.container_card{
  background-color: #EEF4ED;
  .card-title, .card-text{
    text-align: left;
  }
  .icona{
    font-size: 27px;
    color:$nav-color;
    background-color: $nav-color-transparent;
    padding-top: 6px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
  .card-title{
    font-size:18px;
  }
  .card-text{
    font-size: 14px;
    color: rgb(134, 134, 134);
  }
}
</style>