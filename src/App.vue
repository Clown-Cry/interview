<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="nav">
    <router-link to="/">导航栏</router-link> |
    <router-link to="/signup">权限页面</router-link>
  </div>
  <router-view></router-view>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.nav {
  display: flex;
  align-content: center;
  justify-content: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
