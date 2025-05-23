<template>
    <div class="create-cv">
      <div class="header">
        <h1>Create Your CV</h1>
        <p>Get started with your professional CV</p>
      </div>
      
      <div class="options">
        <div class="option-card" @click="startFromScratch">
          <div class="icon">✏️</div>
          <h3>Start from Scratch</h3>
          <p>Build your CV completely from scratch with our guided editor</p>
        </div>
        
        <div class="option-card" @click="useTemplate">
          <div class="icon">🎨</div>
          <h3>Use a Template</h3>
          <p>Choose from our professionally designed templates</p>
        </div>
        
        <div class="option-card" @click="uploadExisting">
          <div class="icon">📤</div>
          <h3>Upload Existing CV</h3>
          <p>Upload and enhance your current CV</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const startFromScratch = () => {
    router.push('/cv-generator');
  };
  
  const useTemplate = () => {
    router.push('/cv-templates');
  };
  
  const uploadExisting = () => {
    // Implement file upload logic
    alert('File upload functionality would be implemented here');
  };
  </script>
  
  <style scoped>
  .create-cv {
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
    margin-bottom: 3rem;
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
  
  .options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .option-card {
    background: ivory;
    border-radius: 0.5rem;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 6px #00866b;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .option-card:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .option-card h3 {
   margin-bottom: 0.5rem;
    color: #00866b;
  }
  
  .option-card p {
    color: #eb6824;
  }
  </style>