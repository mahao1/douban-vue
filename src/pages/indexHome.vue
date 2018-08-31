<template>
  <div class="indexHome has-main layout">
    <!--navBar-->
    <navBar></navBar>
    <!--home-->
    <list></list>
  </div>
</template>

<script>
  import navBar from '../components/navBar'
  import list from '../components/list'
  export default {
    name: "indexHome",
    data(){
      return {
        msg: 'hello world'
      }
    },
    components: {
      navBar, list
    }
  }
</script>

<style scoped>

</style>
