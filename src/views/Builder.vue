<template>
  <div class="builder">
    <Header />
    <main class="content">
      <h1>Resume Builder</h1>
      <p>This is where users will build their resumes.</p>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.content {
  padding: 4rem 1rem;
  text-align: center;
}
</style>
