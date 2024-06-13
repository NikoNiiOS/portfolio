<script setup>

</script>

<template>
<section class="foot">
    <p class="section__text__p1">Get some</p>
    <h1 class="title">Links</h1>
    <div id="socials-container">
        <nav id="a-container">
            <a 
            class="icon" 
            href="https://github.com/NikoNiiOS" 
            target="_blank">
                <img 
                src="../assets/img/github_icon.png" 
                alt="Github's logo" 
                title="To my Github page"
                />
            </a>
            <a 
            class="icon" 
            href="https://twitter.com" 
            target="_blank">
                <img 
                src="../assets/img/x_icon.png" 
                alt="X's logo" 
                title="To X">
            </a>
            <a 
            class="icon" 
            href="https://fr.linkedin.com" 
            target="_blank">
                <img 
                src="../assets/img/in_icon.png" 
                alt="LinkedIn's logo" 
                title="To LinkedIn">
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