<template>
  <div class="headBar">
    <el-container>
      <el-header>豆瓣</el-header>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "headBar",
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  .headBar{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background: #575757;
    color: #fff;
    font-size: 1.4rem;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
</style>
