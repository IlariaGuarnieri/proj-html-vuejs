<script>
import Firstsection from './partials/Firstsection.vue';
import Lastsection from '../components/Lastsection.vue';
import {store} from '../data/store'

export default {
  components:{
    Firstsection,
    Lastsection
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
    <Lastsection />

  </div>
</template>

<style lang="scss" scoped>
</style>