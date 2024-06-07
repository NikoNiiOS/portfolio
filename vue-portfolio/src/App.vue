<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DesktopNav from './components/DesktopNavigation.vue'
import MobileNav from './components/MobileNavigation.vue'
</script>

<template>
  <DesktopNav />
  <MobileNav />
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
