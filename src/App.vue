<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>

</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  background: #dfe2e4b1;
  min-height: 100vh;
  font-weight: 400;
  display: flex;

}


body,
html,
#app,
#root {
  height: 100%;
  width: 100%;
}

#app {
  text-align: center;
}
</style>
