<template>
    <div class="resume-templates">
      <div class="header">
        <h1>Resume Templates</h1>
        <p>Choose from our professionally designed resume templates</p>
      </div>
      
      <div class="filter-bar">
        <button 
          v-for="category in categories" 
          :key="category" 
          @click="filterTemplates(category)"
          :class="{ active: activeCategory === category }"
        >
          {{ category }}
        </button>
      </div>
      
      <div class="templates-grid">
        <div 
          class="template-card" 
          v-for="template in filteredTemplates" 
          :key="template.id"
          @click="selectTemplate(template)"
        >
          <img :src="template.image" :alt="template.name">
          <div class="template-info">
            <h3>{{ template.name }}</h3>
            <span class="category-badge">{{ template.category }}</span>
            <button @click.stop="selectTemplate(template)" class="select-btn">Select</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const categories = ref(['All', 'Professional', 'Creative', 'Modern', 'Simple', 'Executive']);
  const activeCategory = ref('All');
  
  const templates = ref([
    {
      id: 1,
      name: 'Classic Professional',
      category: 'Professional',
      image: 'https://via.placeholder.com/300x400?text=Professional+Resume'
    },
    {
      id: 2,
      name: 'Creative Designer',
      category: 'Creative',
      image: 'https://via.placeholder.com/300x400?text=Creative+Resume'
    },
    {
      id: 3,
      name: 'Modern Layout',
      category: 'Modern',
      image: 'https://via.placeholder.com/300x400?text=Modern+Resume'
    },
    {
      id: 4,
      name: 'Executive',
      category: 'Executive',
      image: 'https://via.placeholder.com/300x400?text=Executive+Resume'
    }
  ]);
  
  const filteredTemplates = computed(() => {
    if (activeCategory.value === 'All') return templates.value;
    return templates.value.filter(t => t.category === activeCategory.value);
  });
  
  const filterTemplates = (category) => {
    activeCategory.value = category;
  };
  
  const selectTemplate = (template) => {
    console.log('Selected template:', template);
    // Navigate to generator with this template selected
  };
  </script>
  
  <style scoped>
.resume-templates {
 max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: ivory;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px #eb6824;
    margin-bottom: 20px;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
    font-size: 2.5rem;
    color:#00866b ;
    margin-bottom: 0.5rem;
  }
  
  .header p {
    font-size: 1.1rem;
    color: #eb6824;
  }

.filter-bar {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .filter-bar button {
    padding: 0.5rem 1rem;
    background-color: #eb6824;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ivory;
  }
  
  .filter-bar button:hover {
    background-color: ivory;
    color: #eb6824;
  }
  
  .filter-bar button.active {
    background-color: #00866b;
    color: ivory;
  }

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.template-card {
    background: ivory;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px #eb6824;
    transition: transform 0.3s ease;
  }

.template-card:hover {
  transform: translateY(-5px);
}

.template-card img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eb6824;
}

.template-info {
  padding: 1rem;
}

.template-info h3 {
    margin-bottom: 0.5rem;
    color: #00866b;
  }

.category-badge {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    background-color: #e0f2fe;
    color: #eb6824;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  
  .select-btn {
    display: block;
    width: 100%;
    padding: 0.75rem;
    background-color: #00866b;
    color: ivory;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .select-btn:hover {
    background-color: #eb6824;
    color: ivory;
    border: 1px solid #00866b;

  }

/* Responsive Styles */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .templates-grid {
    grid-template-columns: 1fr;
  }
}
</style>