<template>
  <div id="app">
    <Header />  <!-- Header is part of layout -->
    <router-view />  <!-- This will show Home, Builder, or Templates -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
