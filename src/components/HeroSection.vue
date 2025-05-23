<template>
  <section class="hero">
    <h2>Create Professional Resumes and CV  in Minutes</h2>
    <p>Stand out from the crowd with a professionally designed resume or CV.</p>
    <div class="actions">
      <button class="btn-primary">Create Your Resume / CV Now</button>
      <button class="btn-outline">View Templates</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 6rem 1rem;
  background:ivory ; /* Dynamic gradient background */
  color: #00866b;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.hero h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards 0.3s; /* Fade-in with slide-up effect */
}

.hero p {
  color: black;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards 0.5s; /* Fade-in with slide-up effect */
  font-size: 20px;
  line-height: 1.5;

}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary, .btn-outline {
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.btn-primary {
  background-color: #eb6824;
  color: white;
  border: none;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid #00866b;
  color: #00866b;
}

.btn-primary:hover {
  background-color: #00866b; /* Change to a vibrant color on hover */
  transform: translateY(-5px); /* Lift the button on hover */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for shadow */
  color: #000; /* Change text color to black on hover */
}

.btn-outline:hover {
  background-color: #ffaf1f;
  color: ivory;
  transform: translateY(-5px); /* Lift the button on hover */
}

/* Fade-in and slide-up animation for heading and paragraph */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
