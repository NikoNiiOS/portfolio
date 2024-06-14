<script setup>

</script>

<template>
    <nav id="desktop-nav">
        <div class="logo">
          <a href="#top" class="logo">Ornata</a>
        </div>
        <div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                  <img
                  id="modeToggle"
                  class="icon color-icon"
                  src="../assets/img/light_theme.png" 
                  src-light="/src/assets/img/light_theme.png"
                  src-dark="/src/assets/img/dark_theme.png"
                  alt="Color theme icon"
                  >
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>

nav, .nav-links {
  display: flex;
  align-items: center;
}

nav {
  justify-content: space-around;
  height: 15vh;
}

.nav-links{
  gap: 2.5rem;
  list-style: none;
  font-size: 1.5rem;
}

a {
  color: var(--secondary-color);
  text-decoration: none;
  text-decoration-color: var(--secondary-color);
}

a:hover{
  text-decoration: underline;
  text-underline-offset: 1rem;
  text-decoration-color: var(--secondary-color);
}

nav a:hover{
  color: var(--secondary-color);
  text-decoration-color: var(--secondary-color);
}

.logo {
  color: var(--secondary-color);
  font-size: 3rem;
}

.logo:hover{
  color: orange;
  text-decoration: none;
}
</style>