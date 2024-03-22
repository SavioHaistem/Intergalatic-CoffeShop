<template>
  <header class="header">
    <ul class="links">
      <a href="build-coffee" class="link">build your coffe</a>
      <a href="buy-coffee" class="link">buy a coffe</a>
      <a href="link" class="link">buy snacks</a>
    </ul>
  </header>
  <slot />
</template>
<style scoped>
  header.header {
    display: flex;
    justify-content: center;
    position: absolute;
    color: white;
    background-color: rgba(83, 135, 145, 0.075);
    backdrop-filter: blur(8rem);
    height: 6vh;
    width: 100vw;
  }
  header.header > ul.links {
    margin: 0px 0px;
    padding: 0px 1rem;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  header.header > ul.links > a.link {
    color: white;
    text-decoration: none;
  }
</style>
