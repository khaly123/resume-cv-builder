<template>
  <section class="features">
    <h3>Why Choose Us</h3>
    <div class="cards">
      <div class="card glass">
        <div class="icon">⚡</div>
        <h4>Fast and Easy</h4>
        <p>Create your resume in minutes with our intuitive builder.</p>
      </div>
      <div class="card glass">
        <div class="icon">📄</div>
        <h4>Professional Templates</h4>
        <p>Choose from expertly designed templates.</p>
      </div>
      <div class="card glass">
        <div class="icon">✅</div>
        <h4>ATS-Friendly</h4>
        <p>Optimized to pass Applicant Tracking Systems.</p>
      </div>
    </div>
  </section>
</template>



<style scoped>
.features {
  padding: 4rem 1rem;
  text-align: center;
  backdrop-filter: blur(4px);
  background:radial-gradient( ivory, #00866b);
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);  /* Optional shadow for depth */
  border-radius: 10px; /* Optional rounded corners */

}

.features h3 {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  color: black;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* Glass card styling */
.card.glass {
  padding: 2rem;
  border-radius: 1rem;
  background: ivory;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(30px);
  opacity: 0;
  animation: fadeInUp 1s forwards;
  transition: all 0.4s ease;
}

.card.glass:nth-child(2) {
  animation-delay: 0.3s;
}

.card.glass:nth-child(3) {
  animation-delay: 0.6s;
}

.card.glass:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 10px 15px #eb6824;
  border-color: #00866b;
  background: rgba(242, 242, 8, 0.17);
  transition: all 0.4s ease;
  color: blue;
}

/* Icon styling */
.icon {
  font-size: 2rem;
  color: #eb6824;
  margin-bottom: 1rem;
}

/* Card titles */
.card h4 {
  font-size: 1.25rem;
  color: black;
  margin-bottom: 0.75rem;
}

/* Card descriptions */
.card p {
  color: #eb6824;
  font-size: 1rem;
  line-height: 1.5;
}

/* Fade-in animation */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
