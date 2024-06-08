<script>
</script>

<template>
    <section id="about">
        <p class="section__text__p1">Get to know more</p>
        <h1 class="title">About me</h1>
        <div class="section-container">
            <div class="section__pic-container">
                <img 
                src="../assets/img/about-pic.png" 
                alt="My profile picture represented by my orange cat"
                class="about-pic"
                />
            </div>
            <div class="about-details-container">
                <div class="about-containers">
                    <div class="details-container">
                        <img 
                        src="../assets/img/exp.png" 
                        alt="experience icon"
                        class="icon"
                        />
                        <h3>Experience</h3>
                        <p>3+ months <br/>Frontend Development</p>
                    </div>
                    <div class="details-container">
                        <img 
                        src="../assets/img/education.png" 
                        alt="experience icon"
                        class="icon"
                        />
                        <h3>Education</h3>
                        <p>B.Tech Science business management
                            <br/>HTC. Acounting & Management
                            <br/>In training to become a web & mobile web developer
                        </p>
                    </div>
                </div>
                <div class="text-container">
                    I'm also an hobyist digital and pixel artist, hobyist game developer and a big dreamer.
                    Currently working on some projects.
                </div>
            </div>
        </div>
        <img 
        src="../assets/img/arrow_down.png" 
        alt="Arrow pointing down icon" 
        class="icon arrow"
        onclick="location.href='./#experience'"
        />
    </section>
</template>

<style>
#about {
    position: relative;
}

.about-containers {
    gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
}

.about-details-container {
    justify-content: center;
    flex-direction: column;
}

.about-containers, .about-details-container {
    display: flex;
}

.about-pic{
    border-radius: 5rem;
}

.arrow {
    position: absolute;
    right: -5rem;
    bottom: 2.5rem;
}

.details-container{
    padding: 1.5rem;
    flex: 1;
    background: white;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    text-align: center;
}

.section__pic-container{
    display: flex;
    height: 400px;
    width: 400px;
    margin: auto 2rem;
    filter: drop-shadow(5px 5px 0.5rem black); 
}
</style>