import { createRouter, createWebHistory } from 'vue-router'

// Main views
import Home from '../views/Home.vue'
import Builder from '../views/Builder.vue'
import Templates from '../views/Templates.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import ResumeBuilder from '../views/ResumeBuilder.vue'
import CvBuilder from '../views/CvBuilder.vue'

// CV Builder Dropdown views
import CvGenerator from '../views/CvBuilderDp/CvGenerator.vue'
import CvTemplates from '../views/CvBuilderDp/CvTemplates.vue'
import CvExamples from '../views/CvBuilderDp/CvExamples.vue'
import HowToWriteCv from '../views/CvBuilderDp/HowToWriteCv.vue'
import CreateCv from '../views/CvBuilderDp/CreateCv.vue'

// Resume Builder Dropdown views
import ResumeGenerator from '../views/ResumeBuilderDp/ResumeGenerator.vue'
import ResumeTemplates from '../views/ResumeBuilderDp/ResumeTemplates.vue'
import CreateResume from '../views/ResumeBuilderDp/CreateResume.vue'

const routes = [
  // Main routes
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    meta: { title: 'Home' }
  },
  { 
    path: '/builder', 
    name: 'Builder', 
    component: Builder,
    meta: { title: 'Builder' }
  },
  { 
    path: '/templates', 
    name: 'Templates', 
    component: Templates,
    meta: { title: 'Templates' }
  },
  { 
    path: '/resume-builder', 
    name: 'ResumeBuilder', 
    component: ResumeBuilder,
    meta: { title: 'Resume Builder' }
  },
  { 
    path: '/cv-builder', 
    name: 'CvBuilder', 
    component: CvBuilder,
    meta: { title: 'CV Builder' }
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login,
    meta: { title: 'Login' }
  },
  { 
    path: '/signup', 
    name: 'Signup', 
    component: Signup,
    meta: { title: 'Sign Up' }
  },
  
  // CV Builder Dropdown routes
  { 
    path: '/cv-generator', 
    name: 'CvGenerator', 
    component: CvGenerator,
    meta: { title: 'CV Generator' }
  },
  { 
    path: '/cv-templates', 
    name: 'CvTemplates', 
    component: CvTemplates,
    meta: { title: 'CV Templates' }
  },
  { 
    path: '/cv-examples', 
    name: 'CvExamples', 
    component: CvExamples,
    meta: { title: 'CV Examples' }
  },
  { 
    path: '/how-to-write-cv', 
    name: 'HowToWriteCv', 
    component: HowToWriteCv,
    meta: { title: 'How to Write a CV' }
  },
  { 
    path: '/create-cv', 
    name: 'CreateCv', 
    component: CreateCv,
    meta: { title: 'Create CV' }
  },
  
  // Resume Builder Dropdown routes
  { 
    path: '/resume-generator', 
    name: 'ResumeGenerator', 
    component: ResumeGenerator,
    meta: { title: 'Resume Generator' }
  },
  { 
    path: '/resume-templates', 
    name: 'ResumeTemplates', 
    component: ResumeTemplates,
    meta: { title: 'Resume Templates' }
  },
  { 
    path: '/create-resume', 
    name: 'CreateResume', 
    component: CreateResume,
    meta: { title: 'Create Resume' }
  },
  

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 }
  }
})

// Update document title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title 
    ? `${to.meta.title} | ResumeBuilder` 
    : 'ResumeBuilder'
  next()
})

export default router