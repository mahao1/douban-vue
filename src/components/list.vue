<template>
  <div class="list">
    <a href="#" class="thumbnail">
      <div class="content">
        <img src="https://img3.doubanio.com/pview/event_poster/hlarge/public/5accb7bc483945f.jpg" alt="cover">
        <h3>HELLO, MY NAME IS PAUL SMITH大展</h3>
        <p>购买须知：限购说明：每单限购6张 座位类型：现场不设座位，均</p>
      </div>
      <div class="author">
        <span class="author-name">展览</span>
      </div>
    </a>
    <a href="#" class="thumbnail">
      <div class="content">
        <img src="https://img1.doubanio.com/pview/event_poster/hlarge/public/4cf6b79d985efe7.jpg" alt="cover">
        <h3>香山夜爬，一览夜色北京</h3>
        <p>装备要求：一双可以登山的鞋子就OK了。集合地点在公交下车位置</p>
      </div>
      <div class="author">
        <span class="author-name">运动</span>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "list",
    data(){
      return {

      }
    },
    mounted(){

    },
    created(){

    }
  }
</script>

<style scoped>
  .list{
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
  .list .thumbnail{
    position: relative;
    display: block;
    padding: 2.5rem 0;
    margin: 0 1.5rem;
    border-bottom: 1px solid #ccc;
  }
  .list .thumbnail .content{
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .content img{
    float: right;
    width: 25.6%;
    height: 8.678rem;
    margin-left: 2.5rem;
  }
  .content h3{
    margin-top: 0;
    margin-bottom: 0.6rem;
    line-height: 1.41;
    text-align: justify;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
  }
  .content p{
    line-height: 1.5;
    text-align: justify;
    color: #aaa;
    font-size: 1.2rem;
    overflow: hidden;
  }
  .list .thumbnail .author{
    font-size: 1.2rem;
    color: #ccc;
  }
</style>
