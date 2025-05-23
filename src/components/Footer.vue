<template>
  <footer class="footer">
    <div class="grid">
      <div>
        <h5>ResumeBuilder</h5>
        <p>Create professional resumes in minutes with our builder.</p>
      </div>
      <div>
        <h5>Company</h5>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <h5>Support</h5>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h5>Connect</h5>
        <p>Email or follow us on social media.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background:#00866b; /* Semi-transparent black background */
  backdrop-filter: blur(10px); /* Glass blur effect */
  color: ivory;
  padding: 5px 15px;
  font-size: 0.875rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 100px; /* Optional: Rounded corners */
  transition: all 0.3s ease; /* Smooth transitions for hover effects */

}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 1100px;
  margin: 0 auto;
  gap: 2rem;
}

h5 {
  color: yellow;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 15px; /* Adjusted font size for headings */
  text-transform: uppercase; /* Uppercase for headings */ 

}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

ul li a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

ul li a:hover {
  color: black; /* Change color on hover */
}
</style>
