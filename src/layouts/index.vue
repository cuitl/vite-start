<template>
  <main class="layout-1">
    <header>header</header>

    <section class="content">
      <aside>侧边栏</aside>
      <article>
        <slot></slot>
      </article>
    </section>

    <footer>底部</footer>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.layout-1 {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}

.content {
  flex: auto;
  display: flex;
}

.content aside {
  width: 200px;
  flex-shrink: 0;
  /* flex-shrink: 1; */
  background-color: powderblue;
}

.content article {
  flex: auto;
}

header,
footer {
  padding: 10px;
  font-size: 20px;
  background-color: paleturquoise;
  color: #fff;
}
</style>
