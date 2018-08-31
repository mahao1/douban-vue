<template>
  <div class="user has-main layout">
    <transition enter-active-class="zoomInLeft animated" leave-active-class="zoomOutRight animated">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  export default {
    name: "user",
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

</style>
