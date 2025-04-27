<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/example/HelloWorld.vue'
import ExampleMaimView from './views/example/ExampleMaimView.vue';
import ServerCheckView from './views/ServerCheckView.vue';
</script>

<template>
  <ServerCheckView/>
  <!-- <ExampleMaimView/> -->

  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped>
</style>
