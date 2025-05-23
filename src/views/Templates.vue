<template>
  <div class="templates-page">
    <Header />
    <main class="content">
      <h1>Browse Resume Templates</h1>
      <Templates />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Templates from '../components/Templates.vue'
</script>

<style scoped>
.content {
  padding: 2rem 1rem;
  text-align: center;
}
</style>
