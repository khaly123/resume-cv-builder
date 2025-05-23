<template>
    <div class="how-to-write-cv">
      <div class="header">
        <h1>How to Write a CV</h1>
        <p>Learn how to create a professional CV that stands out</p>
      </div>
      
      <div class="content">
        <div class="guide-section">
          <h2>1. Personal Information</h2>
          <p>Include your full name, professional title, contact information, and optionally a LinkedIn profile or portfolio link.</p>
        </div>
        
        <div class="guide-section">
          <h2>2. Professional Summary</h2>
          <p>Write a brief 3-4 sentence summary highlighting your key qualifications and career goals.</p>
        </div>
        
        <div class="guide-section">
          <h2>3. Work Experience</h2>
          <p>List your work history in reverse chronological order, including job titles, company names, dates, and key achievements.</p>
        </div>
        
        <div class="guide-section">
          <h2>4. Education</h2>
          <p>Include your degrees, certifications, and relevant coursework.</p>
        </div>
        
        <div class="guide-section">
          <h2>5. Skills</h2>
          <p>Highlight relevant hard and soft skills that match the job requirements.</p>
        </div>
        
        <div class="cta">
          <router-link to="/create-cv" class="create-btn">Create Your CV Now</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No script needed for basic functionality
  </script>
  
  <style scoped>
  .how-to-write-cv {
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
    color: #00866b;
    margin-bottom: 0.5rem;
  }
  
  .header p {
    font-size: 1.1rem;
    color: #eb6824;
  }
  
  .guide-section {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .guide-section h2 {
    color: #eb6824;
    margin-bottom: 0.5rem;
  }
  
  .cta {
    text-align: center;
    margin-top: 3rem;
  }
  
  .create-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #00866b;
    color: ivory;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .create-btn:hover {
    background-color: ivory;
    color: #00866b;
    border: 1px solid #00866b;

  }
  </style>