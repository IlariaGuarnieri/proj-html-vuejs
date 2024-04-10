<script>
export default {
  props:{
    lastcard : Object
  }
}
</script>

<template>
  <div class="card" style="width: 16rem; height:14rem;">
    <div class="card-body">
      <p class="logo" v-html="lastcard.logo"></p>
      <p class="card-text">{{lastcard.text }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/_variables.scss' as * ;

.card-title, .card-text{
    text-align: left;
}
  .card-title{
    font-size:18px;
  }
  .card-text{
    font-size: 14px;
    color: rgb(134, 134, 134);
  }
  .card{
    display: flex;
    margin-right: 50px;
    justify-content: center;
    border-color: $color-first-section;
    border-radius: 10px;
  }

  p .logo{
    width: 10px;
  }
</style>