<script setup lang="ts">
    definePageMeta({
        layout: "header"
    })
</script>
<template>
    <NuxtLayout/>
    <main class="content">
        <h3 class="description">
            Seja bem vindo á cafeteria intergalática, iremos tentar o acolher da melhor forma possível
            em nosso ambiente, aproveite a nossa tecnologia de ponta em quanto descansa das suas
            cansativas viagens intergaláticas
        </h3>
    </main>
</template>
<style scoped>
* {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    border: 0px 0px 0px 0px;
}
main.content {
    width: 80vmin;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
main.content > h3.description {
    padding: 4rem;
    color: rgb(245, 245, 245);
    font-size: 18px;
    line-height: 1.8rem;
}
@media (max-width: 729px) {
    main.content > h3.description {
        padding: 1rem;
        font-size: 14px;
        max-height: 10rem;
        overflow: auto;
    }
}
</style>