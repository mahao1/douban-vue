<template>
  <div class="navBar layout">
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navBar",
    data(){
      return {
        images: [
          "../static/images/img7.jpg",
          "../static/images/img9.jpg",
          "../static/images/img10.jpg",
          "../static/images/img11.jpg"
        ]
      }
    }
  }
</script>

<style scoped>
  .navBar{
    height: 150px;
    margin: 0 1.8rem;
    text-align: center;
  }
  .el-carousel__item img {
    opacity: 0.75;
    width: 100%;
    height: 100%;
  }

</style>
