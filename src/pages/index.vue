<template>
  <div class="index has-main">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "index",
    data(){
      return {
        msg: 'hello world'
      }
    },
    components: {

    }
  }
</script>

<style scoped>

</style>
