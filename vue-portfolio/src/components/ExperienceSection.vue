<script setup>
import Pro from './icons/IconProjects.vue'
</script>

<template>
    <section id="experience">
        <p class="section__text__p1"> Explore my</p>
        <h1 class="title">Experience</h1>
        <div class="experience-details-container">
            <div class="about-containers">
                <div class="details-container">
                    <h2 class="experience-sub-title">Frontend Development</h2>
                    <div class="article-container">
                        <article>
                            <img 
                            src="../assets/img/checkmark.png"
                            src-light="/src/assets/img/checkmark.png"
                            src-dark="/src/assets/img/checkmark_dark.png"
                            alt="Experience icon"
                            class="icon"
                            />
                            <div>
                                <h3>HTML</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img 
                            src="../assets/img/checkmark.png"
                            src-light="/src/assets/img/checkmark.png"
                            src-dark="/src/assets/img/checkmark_dark.png"
                            alt="Experience icon"
                            class="icon"
                            />
                            <div>
                                <h3>CSS</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img 
                            src="../assets/img/checkmark.png" 
                            src-light="/src/assets/img/checkmark.png"
                            src-dark="/src/assets/img/checkmark_dark.png"
                            alt="Experience icon"
                            class="icon"
                            />
                            <div>
                                <h3>Javascript</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Backend Development</h2>
                    <div class="article-container">
                        <article>
                            <img 
                            src="../assets/img/checkmark.png" 
                            src-light="/src/assets/img/checkmark.png"
                            src-dark="/src/assets/img/checkmark_dark.png"
                            alt="Experience icon"
                            class="icon"
                            />
                            <div>
                                <h3>Node.js</h3>
                                <p>Beginner</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Other Languages</h2>
                    <div class="article-container">
                        <article>
                            <img 
                            src="../assets/img/checkmark.png"
                            src-light="/src/assets/img/checkmark.png"
                            src-dark="/src/assets/img/checkmark_dark.png" 
                            alt="Experience icon"
                            class="icon"
                            />
                            <div>
                                <h3>Git</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img 
                            src="../assets/img/checkmark.png"
                            src-light="/src/assets/img/checkmark.png"
                            src-dark="/src/assets/img/checkmark_dark.png" 
                            alt="Experience icon"
                            class="icon"
                            />
                            <div>
                                <h3>GDScript</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img 
                            src="../assets/img/checkmark.png"
                            src-light="/src/assets/img/checkmark.png"
                            src-dark="/src/assets/img/checkmark_dark.png" 
                            alt="Experience icon"
                            class="icon"
                            />
                            <div>
                                <h3>C#</h3>
                                <p>Beginner</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <Pro />
    </section>
</template>

<style>
#experience{
    position: relative;
}

.experience-sub-title {
    color: var(--secondary-color);
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 2rem;
}

.experience-details-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.article-container {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-around;
}

article {
    display: flex;
    width: 10rem;
    justify-content: space-around;
    gap: 0.5rem;
}

article .icon {
    cursor: default;
}
</style>