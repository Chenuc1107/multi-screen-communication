<template>
  <div
    id="app"
    class="dragon-app"
  >
    app
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(`vue init`)
  }
}
</script>

<style lang="scss" scoped>
  .dragon-app {
    height: 100%;
    width: 100%;
  }
</style>
