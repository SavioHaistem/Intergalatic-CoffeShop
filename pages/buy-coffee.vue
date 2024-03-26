<template>
  <div class="page">
    <header>
      <h1 class="title">Buy your coffee</h1>
    </header>
    <main>
      <ul class="coffees-list">
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
        <li class="coffee-item"></li>
      </ul>
      <div class="coffees-table"></div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
  div.page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div.page > * {
    border: 1px solid white;
  }
  h1.title {
    max-height: 2rem;
  }
  main {
    width: 95vw;
    height: calc(100vh - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ul.coffees-list {
    overflow-x: auto;
    padding: 10px;
    height: 80vh;
    border: 1px solid white;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 13rem));
    grid-gap: 1rem;
    display: grid;
    grid-auto-rows: 18rem;
    grid-auto-columns: 20rem;
    grid-auto-flow: row;
    justify-content: center;
  }
  ul.coffees-list::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0);
  }
  li.coffee-item {
    list-style: none;
    border-radius: 5px;
    background-color: rgb(197, 197, 197);
    border: 1px solid rgba(146, 146, 146, 0.507);
  }
</style>

// TODO: Make buy coffee grid coffees section
