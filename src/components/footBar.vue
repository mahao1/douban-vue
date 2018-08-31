<template>
  <div class="footBar">
    <el-container>
      <ul class="footer">
        <li>
          <router-link  to="/index" class="foot-link">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/movie" class="foot-link">
            <i class="iconfont icon-movie"></i>
            <span>电影</span>
          </router-link>
        </li>
        <li>
          <router-link to="/book" class="foot-link">
            <i class="iconfont icon-book"></i>
            <span>图书</span>
          </router-link>
        </li>
        <li>
          <router-link to="/user" class="foot-link" keep-alive>
            <i class="iconfont icon-seeuser"></i>
            <span>用户</span>
          </router-link>
        </li>
      </ul>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "footBar",
    data(){
      return{

      }
    },
    mounted(){

    }
  }
</script>

<style scoped>
  .footBar{
    width: 100%;
    height: 4rem;
    background: #575757;
    color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
  }
  .footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4rem;
  }
  .foot-link{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 1.4rem;
  }
  .router-link-active {
    color: red !important;
  }

</style>
