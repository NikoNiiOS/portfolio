<script>

</script>

<template>
<section>
    <img 
    src="" 
    alt=""
    class="error-img"
    />
    <h1>404</h1>
    <p> 
        Oops, that page doesn't exist. Try going 
        <router-link to = "/"  class="link">home.</router-link>
    </p>
</section>
</template>

<style scoped>
section {
    font-size: 3rem;
    text-align: center;
}

.link{
    text-decoration: none;
    color: rgb(66, 233, 130);
}

.link:hover {
    color: chartreuse;
}
</style>