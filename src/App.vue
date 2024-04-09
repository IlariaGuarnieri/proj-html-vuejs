<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';


export default {
  components:{
    Header,
    Main,
    Footer,
  },
  data(){
    return {
      arrayFooter:[ '+1(305)1234-5678','hello@example.com','Main Avenue, 987'],
    }
  }
}
</script>

<template>
  <Header />
  <Main />
  <!-- tramite :arrayFooter ="arrayFooter" stampo nel footer dinamicamente cio che c'è nell'array-->
  <Footer :arrayFooter ="arrayFooter"/>
</template>

<style lang="scss" scoped>
@use './assets/scss/partials/main.scss';
</style>