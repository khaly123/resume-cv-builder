<template>
    <div class="resume-generator">
      <div class="header">
        <h1>Resume Generator</h1>
        <p>Create your professional resume in minutes with our easy-to-use generator</p>
      </div>
      
      <div class="generator-container">
        <div class="form-section">
          <h2>Personal Information</h2>
          <form @submit.prevent="generateResume">
            <!-- Personal Info Fields -->
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" v-model="resumeData.fullName" required>
            </div>
            
            <div class="form-group">
              <label for="jobTitle">Professional Title</label>
              <input type="text" id="jobTitle" v-model="resumeData.jobTitle" required>
            </div>
            
            <!-- Contact Info Fields -->
            <div class="form-row">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="resumeData.email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" v-model="resumeData.phone">
              </div>
            </div>
            
            <!-- Work Experience Section -->
            <h2>Work Experience</h2>
            <div class="experience-item" v-for="(exp, index) in resumeData.experience" :key="index">
              <div class="form-group">
                <label :for="'company'+index">Company</label>
                <input type="text" :id="'company'+index" v-model="exp.company">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label :for="'jobTitle'+index">Job Title</label>
                  <input type="text" :id="'jobTitle'+index" v-model="exp.jobTitle">
                </div>
                <div class="form-group">
                  <label :for="'location'+index">Location</label>
                  <input type="text" :id="'location'+index" v-model="exp.location">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label :for="'startDate'+index">Start Date</label>
                  <input type="text" :id="'startDate'+index" v-model="exp.startDate" placeholder="MM/YYYY">
                </div>
                <div class="form-group">
                  <label :for="'endDate'+index">End Date</label>
                  <input type="text" :id="'endDate'+index" v-model="exp.endDate" placeholder="MM/YYYY or Present">
                </div>
              </div>
              <div class="form-group">
                <label :for="'description'+index">Description</label>
                <textarea :id="'description'+index" v-model="exp.description" rows="3"></textarea>
              </div>
              <button type="button" @click="removeExperience(index)" class="remove-btn">Remove</button>
            </div>
            <button type="button" @click="addExperience" class="add-btn">Add Experience</button>
            
            <!-- Generate and Save Buttons -->
            <div class="actions">
              <button type="submit" class="generate-btn">Generate Resume</button>
              <button type="button" @click="saveDraft" class="save-btn">Save Draft</button>
            </div>
          </form>
        </div>
        
        <div class="preview-section">
          <h2>Resume Preview</h2>
          <div class="resume-preview">
            <!-- Preview content would be rendered here -->
            <div class="preview-header">
              <h3>{{ resumeData.fullName || 'Your Name' }}</h3>
              <p class="job-title">{{ resumeData.jobTitle || 'Your Profession' }}</p>
            </div>
            
            <div class="preview-content">
              <!-- Work Experience Preview -->
              <div class="preview-block" v-if="resumeData.experience.length > 0">
                <h4>WORK EXPERIENCE</h4>
                <div v-for="(exp, index) in resumeData.experience" :key="index" class="experience-item">
                  <p class="company">{{ exp.company }}</p>
                  <p class="job-info">
                    <span class="job-title">{{ exp.jobTitle }}</span>
                    <span class="date-range">{{ exp.startDate }} - {{ exp.endDate }}</span>
                  </p>
                  <p class="job-description">{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const resumeData = ref({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    experience: [
      {
        company: '',
        jobTitle: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ]
  });
  
  const addExperience = () => {
    resumeData.value.experience.push({
      company: '',
      jobTitle: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };
  
  const removeExperience = (index) => {
    if (resumeData.value.experience.length > 1) {
      resumeData.value.experience.splice(index, 1);
    }
  };
  
  const generateResume = () => {
    console.log('Generating resume with data:', resumeData.value);
    alert('Resume generated successfully!');
  };
  
  const saveDraft = () => {
    console.log('Saving draft:', resumeData.value);
    alert('Draft saved successfully!');
  };
  </script>
  
  <style scoped>
  
.resume-generator {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  background: ivory;
  border-radius: 0.5rem;  
  box-shadow: 0 4px 6px #00866b;
  font-family: 'Arial', sans-serif;
  color: #374151;
  margin-bottom: 20px;
  border: 1px solid #d1d5db;  
  border-radius: 25px;


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

.generator-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.form-section, .preview-section {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px #eb6824;
}

h2 {
  color: #eb6824;
  margin: 1.5rem 0 1rem;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #00866b;
  border-radius: 0.375rem;
  font-size: 1rem;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.experience-item {
  background: #f9fafb;
  padding: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  position: relative;
}

.remove-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
}
.remove-btn:hover {
  background: #dc2626;
  color: white;
  border: 1px solid #dc2626;
  transform: scale(1.05);
  transition: all 0.3s ease;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px #00866b;
}

.add-btn {
  background: #00866b;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  color: ivory;
  font-size: 1rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  transition: background 0.3s;
  border: 1px solid #00866b;

}
.add-btn:hover {
  background: #005f4b;
  color: white;
  border: 1px solid #005f4b;
  transform: scale(1.05);
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px #eb6824;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.generate-btn {
  background: #eb6824;
  color: black;
  border: none;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  flex: 1;
}
.generate-btn:hover {
  background: #d97706;
  color: white;
  border: 1px solid #d97706;
  transform: scale(1.05);
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px #00866b;
}

.save-btn {
  background: #00866b;
  border: #005f4b;
  border-radius: 0.375rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  flex: 1;
  color: ivory;

}
.save-btn:hover {
  background: #005f4b;
  color: white;
  border: 1px solid #d97706;
  transform: scale(1.05);
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px #eb6824;
}

/* Resume Preview Styles */
.resume-preview {
  font-family: 'Arial', sans-serif;
  background: white;
  color: #333;
  padding: 2rem;
  min-height: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.preview-header {
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 1rem;
}

.preview-header h3 {
  font-size: 1.8rem;
  color: #2563eb;
  margin-bottom: 0.25rem;
}

.preview-header .job-title {
  font-size: 1.2rem;
  color: #555;
  font-weight: 500;
}

.preview-block {
  margin-bottom: 2rem;
}

.preview-block h4 {
  color: #2563eb;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.25rem;
}

.experience-item .company {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.job-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.job-info .job-title {
  font-style: italic;
}

.job-info .date-range {
  color: #555;
}

.job-description {
  margin-left: 1rem;
  line-height: 1.5;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .generator-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .header h1 {
    font-size: 2rem;
  }
}
</style>