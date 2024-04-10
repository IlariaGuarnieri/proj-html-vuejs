<script>
import { store } from '../data/store';
import Lastcard from '../components/partials/Lastcard.vue';
export default {
  components:{
    Lastcard
  },
  data() {
    return {
      store,
    }
  },
  
}
</script>


<template>

<div class="conti">
  <h5>CUSTOMER TESTIMONIALS</h5>
  <h1>Trusted Feedback</h1>
  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eius quae? Voluptatibus esse commodi dolorem inventore obcaecati nobis nesciunt sapiente voluptas! Officiis illo ipsam illum laborum dolore maiores deserunt ut.</span>
  <div class="container_card">

      <section class="d-flex">
      <Lastcard v-for="(item, index) in store.lastSectionCard" 
      :key="index"
      :lastcard="item"/>
    </section>
  </div>

</div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as * ;

h5{
  font-size: 15px;
  color: $nav-color;
}
.container_card{
  background-color: $color-first-section;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.conti{
  background-color: $color-first-section;
}
h1{
  font-weight: bolder;
}
</style>