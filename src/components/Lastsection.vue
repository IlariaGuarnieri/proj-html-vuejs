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
  <div class="container_card d-flex">

    <section class="d-flex">

      <Lastcard v-for="(item, index) in store.lastSectionCard" 
      :key="index"
      :lastcard="item"/>

    </section>

  </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as * ;

.container_card{
  background-color: $color-first-section;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>