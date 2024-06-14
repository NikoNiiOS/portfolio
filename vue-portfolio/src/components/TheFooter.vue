<script setup>

</script>

<template>
    <section class="foot">
        <p class="section__text__p1">Get some</p>
        <h1 class="title">Links</h1>
        <div id="socials-container">
            <nav id="a-container">
                <a 
                href="https://github.com/NikoNiiOS" 
                target="_blank">
                    <img 
                    src="../assets/img/github_icon.png"
                    src-light="/src/assets/img/github_icon.png"
                    src-dark="/src/assets/img/github_icon_dark.png"
                    alt="Github's logo" 
                    title="To my Github page"
                    class="icon github-icon">
                </a>
                <a 
                href="https://twitter.com" 
                target="_blank">
                    <img 
                    src="../assets/img/x_icon.png" 
                    src-light="/src/assets/img/x_icon.png"
                    src-dark="/src/assets/img/x_icon_dark.png"
                    alt="X's logo" 
                    title="To X"
                    class="icon twitter-icon">
                </a>
                <a 
                href="https://fr.linkedin.com" 
                target="_blank">
                    <img 
                    src="../assets/img/in_icon.png" 
                    src-light="/src/assets/img/in_icon.png"
                    src-dark="/src/assets/img/in_icon_dark.png"
                    alt="LinkedIn's logo" 
                    title="To LinkedIn"
                    class="icon linkedin-icon">
                </a>
            </nav>
        </div>
        <div class="footer-infos">
            <p>Copyright &#169; 2024 Nicolas Lamour</p>
            <p>Last update: 2024-06-13</p>
        </div>
    </section>
</template>

<style>
.foot {
    height: 42vh;
    padding-top: 8vh;
}

.footer-infos {
    display: flex;
    justify-content: center;
    gap: 8rem;
    margin: 2rem;
}
</style>