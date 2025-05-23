<template>
  <div class="cv-builder">
    <h1>Create Your Cover Letter</h1>
    <form @submit.prevent="generateCoverLetter">
      <!-- Personal Information Section -->
      <div class="form-group">
        <label for="name">Your Name</label>
        <input v-model="coverLetterData.name" type="text" id="name" placeholder="John Doe" required />
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input v-model="coverLetterData.jobTitle" type="text" id="jobTitle" placeholder="Software Engineer" required />
      </div>
      <div class="form-group">
        <label for="company">Company Name</label>
        <input v-model="coverLetterData.company" type="text" id="company" placeholder="ABC Corp" required />
      </div>
      
      <!-- Cover Letter Content -->
      <div class="form-group">
        <label for="letterContent">Cover Letter</label>
        <textarea v-model="coverLetterData.content" id="letterContent" placeholder="Write your cover letter here..." required></textarea>
      </div>
      
      <!-- Tone Selection -->
      <div class="form-group">
        <label for="tone">Tone</label>
        <select v-model="coverLetterData.tone" id="tone">
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
          <option value="enthusiastic">Enthusiastic</option>
        </select>
      </div>

      <button type="submit">Generate Cover Letter</button>
    </form>

    <!-- Preview Section -->
    <div v-if="generatedLetter" class="preview">
      <h2>Your Cover Letter Preview</h2>
      <div class="letter-preview">
        <p><strong>{{ coverLetterData.name }}</strong></p>
        <p>{{ coverLetterData.jobTitle }} at {{ coverLetterData.company }}</p>
        <p>{{ coverLetterData.content }}</p>
        <p><em>Tone: {{ coverLetterData.tone }}</em></p>
      </div>
      <button @click="downloadLetter">Download</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverLetterData: {
        name: '',
        jobTitle: '',
        company: '',
        content: '',
        tone: 'formal',
      },
      generatedLetter: false
    };
  },
  methods: {
    generateCoverLetter() {
      this.generatedLetter = true;
    },
    downloadLetter() {
      // Logic to download as PDF
      const content = `
        Name: ${this.coverLetterData.name}
        Job Title: ${this.coverLetterData.jobTitle}
        Company: ${this.coverLetterData.company}
        Content: ${this.coverLetterData.content}
        Tone: ${this.coverLetterData.tone}
      `;
      const blob = new Blob([content], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'Cover_Letter.pdf';
      link.click();
    }
  }
};
</script>

<style scoped>
.cv-builder {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
}
h1 {
  text-align: center;
  color: #333;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input, textarea, select {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
textarea {
  height: 200px;
}
button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.preview {
  margin-top: 30px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.letter-preview {
  white-space: pre-wrap;
}
</style>
