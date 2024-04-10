<script>
export default {
  props:{
// card è il nome che ho scelto per la mia props, vedi Firstsection riga 23
// object perche il mio item in store.js è un oggetto
    card: Object
  }

}
</script>

<template>
  <div class="card" style="width: 15rem; height:15rem;">
    <div class="card-body">
      <p class="icona" v-html="card.icona"></p>
      <h5 class="card-title">{{card.titolo}}</h5>
      <p class="card-text">{{card.testo }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_variables.scss' as *;

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
  .card{
    display: flex;
    margin-right: 50px;
    justify-content: center;
    border-color: $color-first-section;
  }
</style>