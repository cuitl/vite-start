<template>
  <main style="padding-top: 80px">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 2 + Vite" />
    <RouterLink to="/about">about</RouterLink>
  </main>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
