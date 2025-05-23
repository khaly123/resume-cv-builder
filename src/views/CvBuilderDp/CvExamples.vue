<template>
    <div class="cv-examples">
      <div class="header">
        <h1>CV Examples</h1>
        <p>Browse our collection of professional CV examples for various industries and job levels</p>
      </div>
      
      <div class="examples-grid">
        <div class="example-card" v-for="example in examples" :key="example.id">
          <img :src="example.image" :alt="example.title" class="example-image">
          <h3>{{ example.title }}</h3>
          <p>{{ example.description }}</p>
          <button @click="useTemplate(example.id)" class="use-template-btn">Use This Example</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const examples = ref([
    {
      id: 1,
      title: 'Professional CV',
      description: 'Clean, modern design suitable for most professional roles',
      image: 'https://via.placeholder.com/300x400?text=Professional+CV'
    },
    {
      id: 2,
      title: 'Academic CV',
      description: 'Detailed format for academic and research positions',
      image: 'https://via.placeholder.com/300x400?text=Academic+CV'
    },
    {
      id: 3,
      title: 'Creative CV',
      description: 'For designers, artists, and creative professionals',
      image: 'https://via.placeholder.com/300x400?text=Creative+CV'
    },
    {
      id: 4,
      title: 'Executive CV',
      description: 'Sophisticated layout for senior-level professionals',
      image: 'https://via.placeholder.com/300x400?text=Executive+CV'
    }
  ]);
  
  const useTemplate = (id) => {
    // Logic to use the selected template
    console.log(`Using CV example with ID: ${id}`);
  };
  </script>
  
  <style scoped>
  .cv-examples {
     max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: lavender;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px #00866b;
    margin-bottom: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .header h1 {
    font-size: 2.5rem;
    color: #eb6824;
    margin-bottom: 0.5rem;
  }
  
  .header p {
    font-size: 1.1rem;
    color: #00866b;
  }
  
  .examples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .example-card {
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .example-card:hover {
    transform: translateY(-5px);
  }
  
  .example-image {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .example-card h3 {
    padding: 1rem 1rem 0;
    color: #00866b;
  }
  
  .example-card p {
    padding: 0 1rem 1rem;
    color: black;
  }
  
  .use-template-btn {
    display: block;
    width: calc(100% - 2rem);
    margin: 0 1rem 1rem;
    padding: 0.75rem;
    background-color: #eb6824;
    color: ivory;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .use-template-btn:hover {
    background-color: #00866b;
    color: ivory;
    border: 1px solid #00866b;
  }
  </style>