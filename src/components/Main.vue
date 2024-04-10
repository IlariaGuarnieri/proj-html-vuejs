<script>
import Firstsection from './partials/Firstsection.vue';
import {store} from '../data/store'

export default {
  components:{
    Firstsection
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <!-- contiene le section  -->
  <div class="text-center">
    <Firstsection/>
  </div>
</template>

<style lang="scss" scoped>
</style>