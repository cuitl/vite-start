<template>
  <div id="app">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<script>
import Layout from './layouts/index.vue'

export default {
  components: { Layout }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  text-align: center;
}
</style>
