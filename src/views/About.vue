<template>
  <section>
    about
    <div class="btn text-light-100 hover:text-light-200 bg-blue-100 hover:bg-blue-200">按钮</div>

    <!-- prettier-ignore -->
    <button
      w:bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      w:text="sm white"
      w:font="mono light"
      w:p="y-2 x-4"
      w:m="x-4"
      w:border="none 2 rounded blue-200"
      w:cursor="pointer"
      w:outline="gray-500 focus:none"
    >
      Button
    </button>

    <button tabindex="-1" class="focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 outline-gray-500 border-none">Button</button>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>
