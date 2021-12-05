<template>
  <header
    class="block border-b border-blue-500 p-4 my-0 mx-auto flex flex-col items-center"
  >
    <div class="container flex items-center justify-between">
      <a
        href="/"
        aria-current="page"
        class="nuxt-link-exact-active nuxt-link-active"
      >
        <img src="../static/logo.svg" alt="myFakeStore" class="h-20" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: [],
  methods: {}
}
</script>

<style>
p {
  @apply leading-8;
}
</style>
