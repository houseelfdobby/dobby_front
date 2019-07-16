<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
html,
body {
  height: 100%;
  margin:0;
  background-color: #e9ebee;
}
#app {
  font-family: a스마일B, "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
