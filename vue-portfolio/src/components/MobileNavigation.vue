<script setup>
function menuHandler() {
    const menu = document.querySelector(".hamburger-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
</script>

<template>
    <nav id="hamburger-nav">
        <div class="logo">Ornata</div>
        <div class="hamburger-menu">
            <div class="hamburger-icon" @click="menuHandler">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="hamburger-links">
            <li><a href="#about" @click="menuHandler">About</a></li>
            <li><a href="#experience" @click="menuHandler">Experience</a></li>
            <li><a href="#projects" @click="menuHandler">Projects</a></li>
            <li><a href="#contact" @click="menuHandler">Contact</a></li>
            <li>
                <img
                id="modeToggle2"
                class="icon color-icon"
                src="../assets/img/light_theme.png" 
                src-light="/src/assets/img/light_theme.png"
                src-dark="/src/assets/img/dark_theme.png"
                alt="Color theme icon"
                >
            </li>
        </div>
        </div>
    </nav>
</template>

<style>

#hamburger-nav {
    display: none;
}

.hamburger-menu {
    position: relative;
    display: inline-block;
}

.hamburger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 23px;
    width: 30px;
    cursor: pointer;
}

.hamburger-icon span{
    width: 100%;
    height: 2px;
    background-color: var(--secondary-color);
    transition: all 0.3 ease-in-out;
}

.hamburger-links {
    position: absolute;
    top: 100%;
    right: 0;
    width: fit-content;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3 ease-in-out;
}

.hamburger-links a {
    display: block;
    padding: 10px;
    text-align: center;
    font-size: 1.5rem;
    color: var(--secondary-color);
    text-decoration: none;
    transition: all 0.3 ease-in-out;
}

.hamburger-links li {
    list-style: none;
}

.hamburger-links.open{
    max-height: 300px;
}

.hamburger-icon.open span:first-child{
    transform: rotate(45deg) translate(10px, 5px);
}

.hamburger-icon.open span:nth-child(2){
    opacity: 0;
}

.hamburger-icon.open span:last-child{
    transform: rotate(-45deg) translate(10px, -5px);
}

.hamburger-icon span:first-child {
    transform: none;
}

.hamburger-icon span:first-child {
    opacity: 1;
}

.hamburger-icon span:first-child {
    transform: none;
}

nav li:last-child {
    width: max-content;
    display: flex;
    margin: auto;
    padding: 10px;
}

.logo {
    font-size: 2.5rem;
}

</style>
