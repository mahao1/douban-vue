<template>
  <div class="book has-main layout">
    <transition enter-active-class="zoomInLeft animated" leave-active-class="zoomOutRight animated">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "book",
    components: {

    }
  }
</script>

<style scoped>

</style>
