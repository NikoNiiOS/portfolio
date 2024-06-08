<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DesktopNav from './components/DesktopNavigation.vue'
import MobileNav from './components/MobileNavigation.vue'
import Profile from './components/ProfileSection.vue'
import About from './components/AboutSection.vue'
import Experience from './components/ExperienceSection.vue'
</script>

<template>
  <header>
    <DesktopNav />
    <MobileNav />
  </header>
  <main>
    <Profile />
    <About />
    <Experience />
  </main>
</template>

<style scoped>
/* MEDIAQUERIES */
@media screen and (max-width: 1200px) {
  #desktop-nav {
    display: none;
  }

  #hamburger-nav {
    display: flex;
  }
}
</style>
