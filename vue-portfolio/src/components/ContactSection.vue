<script setup>

</script>

<template>
<section id="contact">
    <p class="section__text__p1">Get in touch</p>
    <h1 class="title">Contact me</h1>
    <div class="contact-info-upper-container">
        <div class="contact-info-container">
            <img 
            src="../assets/img/email.png" 
            alt="Email icon"
            class="icon contact-icon"
            />
            <p><a href="mailto:n.lamour.bloch@gmail.com">n.lamour.bloch@gmail.com</a></p>
        </div>
    </div>
</section>
</template>

<style>
#contact {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
}

.contact-info-upper-container {
    display: flex;
    justify-content: center;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    background: white;
    margin: 2rem auto;
    padding: 1.5rem;
}

.contact-info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem;
}

.contact-info-container p{
    font-size: larger;
}

.contact-icon {
    cursor: default;
}
</style>