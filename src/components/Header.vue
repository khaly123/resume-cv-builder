<template>
  <header class="header">
    <h1 class="logo">ResumeBuilder</h1>
    <div class="nav-card">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        
        <!-- Resume Builder Dropdown -->
        <div class="dropdown" 
             @mouseenter="openDropdown('resume')" 
             @mouseleave="closeDropdown('resume')">
          <button class="dropdown-toggle">
            Resume Builder ▼
          </button>
          <div class="dropdown-menu" :class="{ 'show': activeDropdown === 'resume' }">
            <router-link to="/resume-generator" @click="closeDropdown('resume')">
              <span>📝</span> Resume Generator
            </router-link>
            <router-link to="/resume-templates" @click="closeDropdown('resume')">
              <span>🎨</span> Resume Templates
            </router-link>
            <router-link to="/create-resume" @click="closeDropdown('resume')" class="highlight">
              <span>🚀</span> Create Resume
            </router-link>
          </div>
        </div>
        
        <!-- CV Builder Dropdown -->
        <div class="dropdown" 
             @mouseenter="openDropdown('cv')" 
             @mouseleave="closeDropdown('cv')">
          <button class="dropdown-toggle">
            CV Builder ▼
          </button>
          <div class="dropdown-menu" :class="{ 'show': activeDropdown === 'cv' }">
            <router-link to="/cv-generator" @click="closeDropdown('cv')">
              <span>📝</span> CV Generator
            </router-link>
            <router-link to="/cv-templates" @click="closeDropdown('cv')">
              <span>🎨</span> CV Templates
            </router-link>
            <router-link to="/cv-examples" @click="closeDropdown('cv')">
              <span>📋</span> CV Examples
            </router-link>
            <router-link to="/how-to-write-cv" @click="closeDropdown('cv')">
              <span>✏️</span> How to Write a CV
            </router-link>
            <router-link to="/create-cv" @click="closeDropdown('cv')" class="highlight">
              <span>🚀</span> Create a CV
            </router-link>
          </div>
        </div>
        
        <router-link to="/templates">Templates</router-link>
        <button class="btn" @click="goToLogin">Get Started</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeDropdown = ref(null);

const openDropdown = (type) => {
  activeDropdown.value = type;
};

const closeDropdown = (type) => {
  if (activeDropdown.value === type) {
    activeDropdown.value = null;
  }
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<style scoped>
/* Add this to your existing header styles */
.header {
  position: relative;
  z-index: 1000; /* Ensure header stays above hero section */
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: #00866b;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: ivory;
  transition: color 0.3s ease;
}

.nav-card {
  background: ivory;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;
}

.nav a {
  color: #00866b;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav a:hover {
  color: black;
  transform: translateY(-3px);
}

.btn {
  background-color: #eb6824;
  color: white;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background-color: #00866b;
  transform: translateY(-3px);
  color: black;
}

/* Dropdown styles */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown + .dropdown {
  margin-left: 0.5rem;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: #00866b;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.dropdown-toggle:hover {
  color: #eb6824;
  transform: translateY(-3px);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #00866b;
  min-width: 220px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  z-index: 1000;
  display: none;
  flex-direction: column;
}

.dropdown-menu.show {
  display: flex;
}

.dropdown-menu a {
  padding: 0.75rem 1.5rem;
  color: black;
  text-decoration: none;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.dropdown-menu a:hover {
  background-color: ivory;
  color: #00866b;
  transform: none;
  font-weight: bold;
  border-radius: 0.5rem;
  
}


.highlight {
  font-weight: bold;
  color: #eb6824 !important;
  background-color: ivory;
  margin-top: 0.5rem;
  border-top: 2px solid #eb6824;
  border-bottom: 2px solid #eb6824;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;
}




/* Responsive adjustments */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .dropdown-menu {
    position: static;
    width: 100%;
    margin-top: 0.5rem;
  }
  
  .dropdown + .dropdown {
    margin-left: 0;
  }
}
</style>