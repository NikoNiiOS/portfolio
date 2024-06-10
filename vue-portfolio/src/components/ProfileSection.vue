<script>

</script>

<template>
<section id="profile">
    <div class="section__pic_container">
        <img src="../assets/img/profile_logo.png" alt="Ornata profile picture">
    </div>
    <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Ornata</h1>
        <p class="section__text__p2">Web Developer</p>
        <div class="btn-container">
            <button class="btn btn-color-2" onclick="window.open()">Open CV</button>
            <button class="btn btn-color-1" onclick="location.href='./#contact'">Contact Info</button>
        </div>
        <div id="socials-container">
            <nav id="a-container">
                <a 
                class="icon" 
                href="https://github.com/NikoNiiOS" 
                target="_blank">
                    <img 
                    src="../assets/img/github_icon.png" 
                    alt="Github's logo" 
                    title="To my Github page">
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
    </div>
</section>
</template>

<style>
#profile {
    display: flex;
    justify-content: center;
    gap: 8rem;
    height: 80vh;
    padding: 14vh;
    width: auto;
}

.section__pic_container {
    display: flex;
    height: 400px;
    width: 400px;
    margin: auto 2rem;
    filter: drop-shadow(0 0 0.5rem black); 
}

.section__text{
    align-self: center;
    text-align: center;
}

.section__text p {
    font-weight: 600;
}

.section__text__p1 {
    text-align: center;
}

.section__text__p2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

.title{
    font-size: 3rem;
    text-align: center;
}

#socials-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
}

#a-container{
    height: 70px;
}

.icon {
    cursor: pointer;
}

.btn-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.btn {
    font-weight: 600;
    transition: all 500ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
}

.btn-color-1, .btn-color-2{
    border: rgb(53, 53, 53) 0.15rem solid;
}

.btn-color-1:hover, .btn-color-2:hover{
    cursor: pointer;
}

.btn-color-1, .btn-color-2:hover{
    background: rgb(53, 53, 53);
    color: white;
}

.btn-color-1:hover{
    background: rgb(0, 0, 0);
}

.btn-color-2{
    background: none;
}

.btn-color-2:hover{
    border: white 0.1rem solid;
}
</style>