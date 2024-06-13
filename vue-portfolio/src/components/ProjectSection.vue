<script setup>
import Modal from './ModalProject.vue'
import Contact from './icons/IconContact.vue'
</script>

<template>
    <section id="projects">
        <p class="section__text__p1">Browse my recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
            <div class="about-containers">
            <div class="details-container color-container projects-container">
                <div class="article-container">
                    <img 
                    src="../assets/img/projects/pic08.jpg" 
                    alt="Image of project 1"
                    class="project-img"
                    />
                </div>
                <h2 class="experience-sub-title project-title">Project One</h2>
                <div class="btn-container">
                    <button class="btn btn-color-2 project-btn">
                        Github
                    </button>
                    <Modal 
                    title="Project 1"
                    date-of-creation=" June 03 2023"
                    techs="[HTML, CSS, Javascript, Vue.js]"></Modal>
                </div>
            </div>
            <div class="details-container color-container projects-container">
                <div class="article-container">
                    <img 
                    src="../assets/img/projects/pic09.jpg" 
                    alt="Image of project 2"
                    class="project-img"
                    />
                </div>
                <h2 class="experience-sub-title project-title">Project Two</h2>
                <div class="btn-container">
                    <button class="btn btn-color-2 project-btn">
                        Github
                    </button>
                    <Modal 
                    title="Project 2"
                    date-of-creation=" January 12 2022"
                    techs="[GDscript]"></Modal>
                </div>
            </div>
            <div class="details-container color-container projects-container">
                <div class="article-container">
                    <img 
                    src="../assets/img/projects/pic10.jpg" 
                    alt="Image of project 3"
                    class="project-img"
                    />
                </div>
                <h2 class="experience-sub-title project-title">Project Three</h2>
                <div class="btn-container">
                    <button class="btn btn-color-2 project-btn">
                        Github
                    </button>
                    <Modal 
                    title="Project 3"
                    date-of-creation=" May 12 2024"
                    techs="[C#]"></Modal>
                </div>
            </div>
        </div>
        </div>
        <Contact />
    </section>
</template>

<style>
#projects {
    position: relative;
}

.color-container {
    border-color: rgb(163, 163, 163);
    background: white;
}

.projects-container:hover{
    filter: drop-shadow(5px 5px 0.5rem black);
    transition: all 500ms ease;
}

.projects-container:hover .project-title{
    text-decoration: underline;
}

.project-img {
    border-radius: 2rem;
    width: 90%;
    height: 90%;
}

.project-title {
    margin: 1rem;
    color: black;
}

.project-btn {
    color: black;
    border-color: rgb(163, 163, 163);
}
</style>