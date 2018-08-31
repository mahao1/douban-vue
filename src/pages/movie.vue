<template>
  <div class="movie has-main layout">
    <transition enter-active-class="zoomInLeft animated" leave-active-class="zoomOutRight animated">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "movie"

  }
</script>

<style scoped>

</style>
