<template>
  <div class="movieHome">
    <movieView></movieView>
  </div>
</template>

<script>
  import movieView from '../components/movieView'
  export default {
    name: "movieHome",
    data(){
      return{

      }
    },
    components: {
      movieView
    }
  }
</script>

<style scoped>

</style>
