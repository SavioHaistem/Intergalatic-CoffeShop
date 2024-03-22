<script setup lang="ts">
  definePageMeta({
    layout: 'header',
  })
</script>
<template>
  <NuxtLayout />
    <main class="content">
      <h3 class="description">
        Seja bem vindo á cafeteria intergalática, iremos tentar o acolher da
        melhor forma possível em nosso ambiente, aproveite a nossa tecnologia de
        ponta em quanto descansa das suas cansativas viagens intergaláticas
      </h3>
      <img
        src="@/public/imgs/coffenave.png"
        alt="coffe shop"
        class="space-nave"
      />
    </main>
</template>
<style scoped>
  * {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    border: 0px 0px 0px 0px;
  }
  main.content {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  main.content > h3.description {
    overflow: auto;
    width: 30rem;
    padding: 1rem;
    color: rgb(245, 245, 245)!important;
    font-size: 18px;
    line-height: 1.8rem;
  }
  main.content > img.space-nave {
    width: 500px;
  }
  @media (max-width: 1170px) {
    main.content {
        flex-direction: row;
        justify-content: center;
        gap: 5rem;
    }
    main.content > h3.description {
      font-size: 15px;
      max-height: 15rem;
      max-width: 25rem;
      overflow: auto;
    }
    main.content > img.space-nave {
      width: 300px;
    }
  }
  @media (max-width: 850px) {
    main.content {
        flex-direction: column;
        gap: 3rem;
    }
    main.content > h3.description {
      font-size: 13px;
      max-height: 10rem;
      max-width: 20rem;
      line-height: 1.4rem;
      overflow: auto;
    }
    main.content >  img.space-nave {
      width: 250px;
    }
  }
</style>
