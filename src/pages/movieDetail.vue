<template>
  <div class="movieDetail has-main layout">
    <div class="subject-card">
      <h1 class="title">{{detail.title}}</h1>
      <div class="subject-info">
        <div class="right">
          <a href="#">
            <img :src="detail.images.small" alt="cover">
          </a>
        </div>
        <div class="left">
          <div class="rating">
            <span>评分：{{detail.rating.average}}</span>
            <span>{{detail.ratings_count}}人评价</span>
          </div>
          <div class="meta year">时间：{{detail.year}}</div>
          <div class="meta genres">类型：{{genresStr}}</div>
          <div class="meta directors">导演：{{directorStr}}</div>
          <div class="meta casts">演员：{{castsStr}}</div>
        </div>

      </div>
      <div class="marking">
        <span>想看{{detail.wish_count}}</span>
        <span>看过{{detail.reviews_count}}</span>
      </div>
      <div class="subject-intro">
        <h2>{{detail.title}}的简介</h2>
        <p>{{isExpand ? summary : detail.summary}}<a href="#" v-show="isExpand" v-on:click="expand">(展开)</a></p>
      </div>
      <div class="subject-pics">
        <h2>{{detail.title}}的图片</h2>
        <ul>
          <li class="pic">
            <a href="#">
              <img :src="detail.images.small" alt="">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img :src="detail.images.small" alt="">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img :src="detail.images.small" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "movieDetail",
    data(){
      return {
        detail: {},//影片详情
        aid: '',//影片id
        directorStr: '',//导演
        genresStr: '',//类型
        castsStr: '',//演员
        summary: '',//简介
        isExpand: true,
      }
    },
    mounted(){
      this.aid = this.$route.query.aid;//获取aid
      this.$http.get('/api/movie/subject/'+this.aid).then(res=>{
        console.log('详情',res.data);
        this.detail = res.data;

        //类型
        var genres = res.data.genres;
        for(var key in genres){
          this.genresStr = this.genresStr + genres[key] + '/';
        }
        if(this.genresStr != ''){
          this.genresStr = this.genresStr.substring(0, this.genresStr.length - 1);
        }
        //导演
        var directors = res.data.directors;
        for(var key in directors){
          this.directorStr = this.directorStr + directors[key].name + '/';
        }
        if(this.directorStr != ""){
          this.directorStr = this.directorStr.substring(0, this.directorStr.length - 1);
        }
        //演员
        var casts = res.data.casts;
        for(var key in casts){
          this.castsStr += casts[key].name + '/';
        }
        if(this.castsStr != ''){
          this.castsStr = this.castsStr.substring(0, this.castsStr.length - 1);
        }

        //简介
        if(this.detail.summary){
          this.summary = this.detail.summary.slice(0, 120) + '...';//截取简介的120个字符
          // console.log(this.summary);
        }
      }).catch(error=>{
        console.log(error);
      })
    },
    methods: {
      expand(){
        this.isExpand = !this.isExpand;
      }
    }
  }
</script>

<style scoped>
  .subject-card{
    padding: 0 1.5rem;
  }
  .subject-card h1{
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.6rem;
  }
  .subject-info{
    margin-bottom: 3rem;
    overflow: hidden;
  }
  .subject-info .left{
    margin-right: 10rem;
  }
  .rating{
    font-size: 1.4rem;
    color: #aaa;
  }
  .rating span{
    margin-right: 1rem;
  }
  .subject-info .left .meta{
    margin-top: 1rem;
    padding-right: 1rem;
    line-height: 1.4;
    font-size: 1.4rem;
    color: #494949;
  }
  .subject-info .right{
    float: right;
  }
  .subject-info .right img{
    display: block;
    width: 100%;
    max-width: 10rem;
  }
  .marking{
    display: flex;
    justify-content: space-around;
    margin: 3rem 0;
  }
  .marking span{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.5rem;
    text-align: center;
    border: 1px solid #ffb712;
    color: #ffb712;
    border-radius: 0.5rem;
    flex: 1;
    margin: 0 1rem;
  }
  .subject-intro,
  .subject-pics{
    margin-bottom: 3rem;
  }
  h2{
    margin: 0 0 1.5rem;
    font-size: 1.5rem;
    color: #aaa;
  }
  .subject-intro p{
    font-size: 1.5rem;
    color: #494949;
    text-indent: 2em;
  }
  .subject-intro a{
    color: #42bd56;
  }
  .subject-pics ul{
    margin-right: -1.8rem;
    overflow-x: auto;
    white-space: nowrap;
  }
  .subject-pics li{
    height: 12rem;
    display: inline-block;
    overflow: hidden;
  }
  .subject-pics li img{
    width: 18rem;
  }
</style>
