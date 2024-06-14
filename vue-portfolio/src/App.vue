<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DesktopNav from './components/DesktopNavigation.vue'
import MobileNav from './components/MobileNavigation.vue'
import Profile from './components/ProfileSection.vue'
import About from './components/AboutSection.vue'
import Experience from './components/ExperienceSection.vue'
import Project from './components/ProjectSection.vue'
import Contact from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div id="modal"></div>
  <header>
    <DesktopNav />
    <MobileNav />
  </header>
  <main>
    <Profile />
    <About />
    <Experience />
    <Project />
    <Contact />
  </main>
  <footer>
    <TheFooter />
  </footer>
</template>

<style>
/* MEDIAQUERIES */
@media screen and (max-width: 1400px) {
  #profile {
    height: 83vh;
    margin-bottom: 6rem;
  }

  .about-containers{
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 1200px) {
  #desktop-nav {
    display: none;
  }

  #hamburger-nav {
    display: flex;
  }
  
  #experience, .experience-details-container {
    margin-top: 2rem;
  }

  #profile, .section-container {
    display: block;
  }

  section, .section-container {
    height: fit-content;
  }

  section {
    margin: 0 5%;
  }

  .section__pic-container {
    width: 30vh;
    height: 30vh;
    margin: 0 auto 2rem;
    justify-content: center;
  }

  .about-containers {
    margin-top: 0;
  }

  .hamburger-links {
    background-image: linear-gradient(60deg, #f6f9ff 0%, #c8deff 100%);
    background-size: 400% 400%;
    animation: headerBackgroundGradient 6s infinite linear;
  }
}

@media screen and (max-width: 600px) {
  footer{
    height: 60vh;
  }

  #contact{
    height: 100vh;
  }

  #profile {
    height: 83vh;
    margin-bottom: 0;
  }

  article{
    font-size: 1rem;
  }

  footer nav{
    height: fit-content;
    margin-bottom: 2rem;
  }

  .footer-infos p{
    text-align: center;
  }

  .about-containers, .contact-info-upper-container, .btn-container {
    flex-wrap: wrap;
  }

  .details-container p{
    text-align: justify;
  }

  .contact-info-container {
    margin: 0;
  }

  .contact-info-container p, .nav-links li a {
    font-size: 1rem;
  }

  .experience-sub-title {
    font-size: 1.25rem;
  }

  .logo{
    font-size: 1.5rem;
    transition: none;
  }

  .section__pic-container {
    width: auto;
    height: 30vw;
    justify-content: center;
  }

  .section__text__p2 {
    font-size: 1.25rem
  }

  .tiltle {
    font-size: 2rem;
  }

  .text-container {
    text-align: justify;
    color: var(--secondary-color);
  }

  .hamburger-links {
    background-image: linear-gradient(60deg, #f6f9ff 0%, #c8deff 100%);
    background-size: 400% 400%;
    animation: headerBackgroundGradient 6s infinite linear;
  }
}
</style>
