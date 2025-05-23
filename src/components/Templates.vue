<template>
  <section class="templates">
    <h3>Professional Templates</h3>
    <div class="grid">
      <div
        class="template-card glass"
        v-for="(template, index) in templates"
        :key="index"
        :style="{ animationDelay: `${index * 0.3}s` }"
      >
        <img :src="template.img" alt="Template preview" />
        <h4>{{ template.title }}</h4>
        <p>{{ template.desc }}</p>
        <button>Use Template</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import modernImg from '../assets/templates/modern.png';
import creativeImg from '../assets/templates/creative.png';
import executiveImg from '../assets/templates/executive.png';

const templates = [
  {
    img: modernImg,
    title: "Modern Professional",
    desc: "Clean design for any profession.",
  },
  {
    img: creativeImg,
    title: "Creative Design",
    desc: "Stand out with a creative style.",
  },
  {
    img: executiveImg,
    title: "Executive Classic",
    desc: "Traditional layout for senior roles.",
  },
];
</script>

<style scoped>
.templates {
  padding: 4rem 1rem;
  text-align: center;
  background: radial-gradient(#00866b, #eb6824);
  border-radius: 50px;
  box-shadow: 0 10px 25px #00866b;
  color: ivory;
  margin: 0 auto;
  max-width: 1500px;
  border: 1px solid #00866b;
  margin-bottom: 50px;
  
}

.templates h3 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  color: black;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  max-height: 1920px;
  margin: 0 auto;
}

.template-card.glass {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  color: ivory;
  transform: translateY(30px);
  opacity: 0;
  animation: fadeInUp 0.8s forwards ease-out;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.template-card.glass:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
  color: #00866b;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: #00866b;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
}

.template-card img {
  width: 100%;
  height: 75%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  object-fit: contain; /* Ensures the entire image fits inside the container */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.template-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: black;
}

.template-card p {
  color: ivory;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.template-card button {
  background-color:ivory;
  color: black;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid ivory;
  cursor: pointer;
}


.template-card button:hover {
  background-color: #00866b;
  transform: scale(1.05);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
