<template>
  <div id="app">
    <!--顶部组件-->
    <headBar></headBar>
    <transition enter-active-class="zoomInLeft animated" leave-active-class="zoomOutRight animated">
      <!--内容一致，无需加载-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!--底部组件-->
    <footBar></footBar>
  </div>
</template>

<script>
import headBar from './components/headBar'
import footBar from './components/footBar'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
    headBar, footBar
  }
}
</script>

<style>

</style>
