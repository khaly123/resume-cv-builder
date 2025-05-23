<template>
    <div class="create-resume">
      <div class="header">
        <h1>Create Your Resume</h1>
        <p>Get started with your professional resume</p>
      </div>
      
      <div class="options">
        <router-link to="/resume-generator" class="option-card">
          <div class="icon">✏️</div>
          <h3>Start from Scratch</h3>
          <p>Build your resume completely from scratch</p>
        </router-link>
        
        <router-link to="/resume-templates" class="option-card">
          <div class="icon">🎨</div>
          <h3>Use a Template</h3>
          <p>Choose from our professionally designed templates</p>
        </router-link>
        
        <div class="option-card" @click="uploadResume">
          <div class="icon">📤</div>
          <h3>Upload Existing</h3>
          <p>Upload and enhance your current resume</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const uploadResume = () => {
    console.log('Upload resume functionality');
    // Implement file upload logic here
  };
  </script>
  
  <style scoped>
.create-resume {
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
  margin-bottom: 3rem;
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
    box-shadow: 0 4px 6px #eb6824;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.option-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2563eb;
}

.option-card h3 {
   margin-bottom: 0.5rem;
    color:#eb6824 ;
  }
  
  .option-card p {
    color: #00866b;
  }

/* Responsive Styles */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .options {
    grid-template-columns: 1fr;
  }
}
</style>