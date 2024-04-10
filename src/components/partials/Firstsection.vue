<script>
import { store } from '../../data/store';
import Card from '../../components/partials/Card.vue'
export default {
  components:{
    Card
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
        <Card v-for="(item, index) in store.firstSectionCard" 
        :key="index"
        :card="item"/>
      </section>

    </div>
  
</template>

<style lang="scss" scoped>
@import '../../assets/scss/partials/variables';


.container_card{
  background-color: $color-first-section;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>