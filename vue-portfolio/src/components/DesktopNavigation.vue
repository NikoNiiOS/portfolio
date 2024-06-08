<script>
</script>

<template>
    <nav id="desktop-nav">
        <div class="logo">Ornata</div>
        <div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
</template>

<style>
nav, .nav-links {
  display: flex;
}

nav {
  justify-content: space-around;
  align-items: center;
  height: 15vh;
}

.nav-links{
  gap: 2.5rem;
  list-style: none;
  font-size: 1.5rem;
}

a {
  color: #1e252e;
  text-decoration: none;
  text-decoration-color: white;
}

a:hover{
  color: grey;
  text-decoration: underline;
  text-underline-offset: 1.2rem;
  text-decoration-color: rgb(181, 181, 181);
}

.logo {
  color: #1e252e;
  font-size: 3rem;
}

.logo:hover{
  cursor: default;
}
</style>