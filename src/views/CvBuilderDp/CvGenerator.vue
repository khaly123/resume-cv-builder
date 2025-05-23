<template>
  <div class="cv-generator">
    <div class="header">
      <h1>CV Generator</h1>
      <p>Create your professional CV in minutes with our easy-to-use generator</p>
    </div>
    
    <div class="generator-container">
      <div class="form-section">
        <h2>Personal Information</h2>
        <form @submit.prevent="generateCV">
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" v-model="cvData.fullName" required>
          </div>
          
          <div class="form-group">
            <label for="jobTitle">Profession</label>
            <input type="text" id="jobTitle" v-model="cvData.jobTitle" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="cvData.email" required>
          </div>
          
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" v-model="cvData.phone">
          </div>
          
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" v-model="cvData.address">
          </div>
          
          <div class="form-group">
            <label for="website">Website</label>
            <input type="url" id="website" v-model="cvData.website">
          </div>
          
          <h2>Professional Summary</h2>
          <div class="form-group">
            <textarea v-model="cvData.summary" rows="4" placeholder="Briefly describe your professional background and skills"></textarea>
          </div>
          
          <h2>Education</h2>
          <div class="education-item" v-for="(edu, index) in cvData.education" :key="index">
            <div class="form-group">
              <label :for="'institution'+index">Institution</label>
              <input type="text" :id="'institution'+index" v-model="edu.institution">
            </div>
            <div class="form-row">
              <div class="form-group">
                <label :for="'startYear'+index">Start Year</label>
                <input type="text" :id="'startYear'+index" v-model="edu.startYear" placeholder="YYYY">
              </div>
              <div class="form-group">
                <label :for="'endYear'+index">End Year</label>
                <input type="text" :id="'endYear'+index" v-model="edu.endYear" placeholder="YYYY">
              </div>
            </div>
            <div class="form-group">
              <label :for="'degree'+index">Degree</label>
              <input type="text" :id="'degree'+index" v-model="edu.degree">
            </div>
            <div class="form-group">
              <label :for="'gpa'+index">GPA</label>
              <input type="text" :id="'gpa'+index" v-model="edu.gpa">
            </div>
            <button type="button" @click="removeEducation(index)" class="remove-btn">Remove</button>
          </div>
          <button type="button" @click="addEducation" class="add-btn">Add Education</button>
          
          <h2>Skills</h2>
          <div class="skills-container">
            <div class="skill-item" v-for="(skill, index) in cvData.skills" :key="'skill'+index">
              <input type="text" v-model="cvData.skills[index]">
              <button type="button" @click="removeSkill(index)" class="remove-btn">×</button>
            </div>
            <button type="button" @click="addSkill" class="add-btn">Add Skill</button>
          </div>
          
          <h2>Languages</h2>
          <div class="language-item" v-for="(lang, index) in cvData.languages" :key="'lang'+index">
            <div class="form-row">
              <div class="form-group">
                <label :for="'language'+index">Language</label>
                <input type="text" :id="'language'+index" v-model="lang.language">
              </div>
              <div class="form-group">
                <label :for="'proficiency'+index">Proficiency</label>
                <select :id="'proficiency'+index" v-model="lang.proficiency">
                  <option value="Basic">Basic</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Native">Native</option>
                </select>
              </div>
            </div>
            <button type="button" @click="removeLanguage(index)" class="remove-btn">Remove</button>
          </div>
          <button type="button" @click="addLanguage" class="add-btn">Add Language</button>
          
          <h2>Work Experience</h2>
          <div class="experience-item" v-for="(exp, index) in cvData.experience" :key="'exp'+index">
            <div class="form-group">
              <label :for="'company'+index">Company</label>
              <input type="text" :id="'company'+index" v-model="exp.company">
            </div>
            <div class="form-group">
              <label :for="'jobTitle'+index">Job Title</label>
              <input type="text" :id="'jobTitle'+index" v-model="exp.jobTitle">
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
          
          <h2>References</h2>
          <div class="reference-item" v-for="(ref, index) in cvData.references" :key="'ref'+index">
            <div class="form-group">
              <label :for="'refName'+index">Name</label>
              <input type="text" :id="'refName'+index" v-model="ref.name">
            </div>
            <div class="form-row">
              <div class="form-group">
                <label :for="'refPosition'+index">Position</label>
                <input type="text" :id="'refPosition'+index" v-model="ref.position">
              </div>
              <div class="form-group">
                <label :for="'refCompany'+index">Company</label>
                <input type="text" :id="'refCompany'+index" v-model="ref.company">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label :for="'refPhone'+index">Phone</label>
                <input type="tel" :id="'refPhone'+index" v-model="ref.phone">
              </div>
              <div class="form-group">
                <label :for="'refEmail'+index">Email</label>
                <input type="email" :id="'refEmail'+index" v-model="ref.email">
              </div>
            </div>
            <button type="button" @click="removeReference(index)" class="remove-btn">Remove</button>
          </div>
          <button type="button" @click="addReference" class="add-btn">Add Reference</button>
          
          <div class="actions">
            <button type="submit" class="generate-btn">Generate CV</button>
            <button type="button" @click="saveDraft" class="save-btn">Save Draft</button>
          </div>
        </form>
      </div>
      
      <div class="preview-section">
        <h2>CV Preview</h2>
        <div class="cv-preview blue-template">
          <div class="preview-header">
            <h3>{{ cvData.fullName || 'Your Name' }}</h3>
            <p class="job-title">{{ cvData.jobTitle || 'Your Profession' }}</p>
          </div>
          
          <div class="preview-columns">
            <div class="left-column">
              <div class="preview-block" v-if="cvData.phone || cvData.email || cvData.address || cvData.website">
                <h4>CONTACT</h4>
                <p v-if="cvData.phone">{{ cvData.phone }}</p>
                <p v-if="cvData.email">{{ cvData.email }}</p>
                <p v-if="cvData.address">{{ cvData.address }}</p>
                <p v-if="cvData.website">{{ cvData.website }}</p>
              </div>
              
              <div class="preview-block" v-if="cvData.education.length > 0 && cvData.education[0].institution">
                <h4>EDUCATION</h4>
                <div v-for="(edu, index) in cvData.education" :key="'edu'+index" class="education-item">
                  <p class="date-range">{{ edu.startYear }} - {{ edu.endYear }}</p>
                  <p class="institution">{{ edu.institution }}</p>
                  <p class="degree">{{ edu.degree }}</p>
                  <p class="gpa" v-if="edu.gpa">GPA: {{ edu.gpa }}</p>
                </div>
              </div>
              
              <div class="preview-block" v-if="cvData.skills.length > 0">
                <h4>SKILLS</h4>
                <ul class="skills-list">
                  <li v-for="(skill, index) in cvData.skills" :key="'skill'+index">{{ skill }}</li>
                </ul>
              </div>
              
              <div class="preview-block" v-if="cvData.languages.length > 0">
                <h4>LANGUAGES</h4>
                <ul class="languages-list">
                  <li v-for="(lang, index) in cvData.languages" :key="'lang'+index">{{ lang.language }} ({{ lang.proficiency }})</li>
                </ul>
              </div>
            </div>
            
            <div class="right-column">
              <div class="preview-block" v-if="cvData.summary">
                <h4>PROFILE</h4>
                <p class="summary-text">{{ cvData.summary }}</p>
              </div>
              
              <div class="preview-block" v-if="cvData.experience.length > 0 && cvData.experience[0].company">
                <h4>WORK EXPERIENCE</h4>
                <div v-for="(exp, index) in cvData.experience" :key="'exp'+index" class="experience-item">
                  <p class="company-name">{{ exp.company }}</p>
                  <p class="job-position">{{ exp.jobTitle }}</p>
                  <p class="date-range">{{ exp.startDate }} - {{ exp.endDate }}</p>
                  <p class="job-description">{{ exp.description }}</p>
                </div>
              </div>
              
              <div class="preview-block" v-if="cvData.references.length > 0 && cvData.references[0].name">
                <h4>REFERENCE</h4>
                <div v-for="(ref, index) in cvData.references" :key="'ref'+index" class="reference-item">
                  <p class="reference-name">{{ ref.name }}</p>
                  <p class="reference-position">{{ ref.position }} / {{ ref.company }}</p>
                  <p class="reference-contact" v-if="ref.phone">Phone: {{ ref.phone }}</p>
                  <p class="reference-contact" v-if="ref.email">Email: {{ ref.email }}</p>
                </div>
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

const cvData = ref({
  fullName: '',
  jobTitle: '',
  email: '',
  phone: '',
  address: '',
  website: '',
  summary: '',
  education: [
    {
      institution: '',
      degree: '',
      startYear: '',
      endYear: '',
      gpa: ''
    }
  ],
  skills: [''],
  languages: [
    {
      language: '',
      proficiency: 'Intermediate'
    }
  ],
  experience: [
    {
      company: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      description: ''
    }
  ],
  references: [
    {
      name: '',
      position: '',
      company: '',
      phone: '',
      email: ''
    }
  ]
});

const addEducation = () => {
  cvData.value.education.push({
    institution: '',
    degree: '',
    startYear: '',
    endYear: '',
    gpa: ''
  });
};

const removeEducation = (index) => {
  if (cvData.value.education.length > 1) {
    cvData.value.education.splice(index, 1);
  }
};

const addSkill = () => {
  cvData.value.skills.push('');
};

const removeSkill = (index) => {
  if (cvData.value.skills.length > 1) {
    cvData.value.skills.splice(index, 1);
  }
};

const addLanguage = () => {
  cvData.value.languages.push({
    language: '',
    proficiency: 'Intermediate'
  });
};

const removeLanguage = (index) => {
  if (cvData.value.languages.length > 1) {
    cvData.value.languages.splice(index, 1);
  }
};

const addExperience = () => {
  cvData.value.experience.push({
    company: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    description: ''
  });
};

const removeExperience = (index) => {
  if (cvData.value.experience.length > 1) {
    cvData.value.experience.splice(index, 1);
  }
};

const addReference = () => {
  cvData.value.references.push({
    name: '',
    position: '',
    company: '',
    phone: '',
    email: ''
  });
};

const removeReference = (index) => {
  if (cvData.value.references.length > 1) {
    cvData.value.references.splice(index, 1);
  }
};

const generateCV = () => {
  // Logic to generate the CV
  console.log('Generating CV with data:', cvData.value);
  alert('CV generated successfully!');
};

const saveDraft = () => {
  // Logic to save the draft
  console.log('Saving draft:', cvData.value);
  alert('Draft saved successfully!');
};
</script>

<style scoped>
.cv-generator {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  background: lavender;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px #eb6824;
  font-family: 'Arial', sans-serif;
  color: #374151;
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

.generator-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.form-section, .preview-section {
  background: ivory;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px#00866b;
}

h2 {
  color: #00866b;
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
  border: 1px solid #d1d5db;
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

.education-item,
.experience-item,
.language-item,
.reference-item {
  background: #f9fafb;
  padding: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  position: relative;
}

.skill-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.skill-item input {
  flex: 1;
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

.skill-item .remove-btn {
  position: relative;
  top: auto;
  right: auto;
  padding: 0 0.5rem;
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

/* Blue Template Styles */
.cv-preview.blue-template {
  font-family: 'Arial', sans-serif;
  background: white;
  color: #333;
  padding: 2rem;
  min-height: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.blue-template .preview-header {
  text-align: left;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 1rem;
}

.blue-template .preview-header h3 {
  font-size: 1.8rem;
  color: #2563eb;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.blue-template .preview-header .job-title {
  font-size: 1.2rem;
  color: #555;
  font-weight: 500;
}

.blue-template .preview-columns {
  display: flex;
  gap: 2rem;
}

.blue-template .left-column {
  flex: 1;
  max-width: 30%;
  background: #f5f9ff;
  padding: 1.5rem;
  border-right: 2px solid #e1e8f7;
}

.blue-template .right-column {
  flex: 2;
  padding: 0 1.5rem;
}

.blue-template h4 {
  color: #2563eb;
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
  border-bottom: 1px solid #e1e8f7;
  padding-bottom: 0.25rem;
}

.blue-template .preview-block {
  margin-bottom: 1.5rem;
}

.blue-template p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.blue-template .date-range {
  font-weight: 500;
  color: #555;
}

.blue-template .institution,
.blue-template .company-name {
  font-weight: 600;
  margin-top: 0.5rem;
}

.blue-template .degree,
.blue-template .job-position {
  font-style: italic;
}

.blue-template .job-description {
  margin-top: 0.5rem;
}

.blue-template ul {
  padding-left: 1.2rem;
  margin: 0.5rem 0;
}

.blue-template li {
  margin-bottom: 0.25rem;
}

.blue-template .summary-text {
  text-align: justify;
}

.blue-template .reference-item {
  margin-bottom: 1rem;
}

.blue-template .reference-name {
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .generator-container {
    grid-template-columns: 1fr;
  }
  
  .blue-template .preview-columns {
    flex-direction: column;
  }
  
  .blue-template .left-column {
    max-width: 100%;
    border-right: none;
    border-bottom: 2px solid #e1e8f7;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>