<template>
  <div class="movieView">
    <div class="movie-list">
      <div class="movie-head">
        <h3>影院热映</h3>
        <a href="#">更多</a>
      </div>
      <div class="movie-content">
        <ul class="movie-ul">
          <li v-for="(item, index) in movieHot" :key="index">
            <router-link :to="{path: 'movieDetail', query: {aid:item.id}}">
              <img :src="item.images.medium" alt="">
              <p class="title">{{item.title}}</p>
              <div class="rating">
                <span>评分：{{item.rating.average}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="movie-list">
      <div class="movie-head">
        <h3>即将上映</h3>
        <a href="#">更多</a>
      </div>
      <div class="movie-content">
        <ul class="movie-ul">
          <li v-for="(item,index) in comingSoon" :key="index">
            <router-link :to="{path: 'movieDetail', query: {aid: item.id}}">
              <img :src="item.images.small" alt="">
              <p class="title">{{item.title}}</p>
              <div class="rating">
                <span>评分：{{item.rating.average}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="movie-list">
      <div class="movie-head">
        <h3>TOP 250</h3>
        <a href="#">更多</a>
      </div>
      <div class="movie-content">
        <ul class="movie-ul">
          <li v-for="(item, index) in top250" :key="index">
            <router-link :to="{path: 'movieDetail', query: {aid: item.id}}">
              <img :src="item.images.small" alt="">
              <p class="title">{{item.title}}</p>
              <div class="rating">
                <span>评分：{{item.rating.average}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "movieView",
    data(){
      return{
        movieHot: [],
        comingSoon: [],
        top250: []
      }
    },
    created(){
      // this.getMovie('/api/movie/in_theaters', this.movieHot, '豆瓣正在热映');
      this.$http.get('/api/movie/in_theaters').then(res=>{
        console.log("豆瓣正在热映",res.data.subjects);
        this.movieHot = res.data.subjects.splice(0,8);//获取前8部
        // console.log(this.movieHot);
      }).catch(error=>{
        console.log(error);
      });
      this.$http.get('/api/movie/coming_soon').then(res=>{
        console.log("豆瓣即将上映",res.data.subjects);
        this.comingSoon = res.data.subjects.splice(0,8);//获取前8部
        // console.log(this.comingSoon);
      }).catch(error=>{
        console.log(error);
      });
      this.$http.get('/api/movie/top250').then(res=>{
        console.log("豆瓣top250",res.data.subjects);
        this.top250 = res.data.subjects.splice(0,8);//获取前8部
        // console.log(this.top250);
      }).catch(error=>{
        console.log(error);
      });
    },
    mounted(){

    },
    methods: {
      /*getMovie(url, dataArr, word){
        this.$http.get(url).then(res=>{
          console.log(word,res.data.subjects);
          dataArr = res.data.subjects.splice(0,8);//获取前8部
          console.log(dataArr);
        }).catch(error=>{
          console.log(error);
        });
      }*/
    }
  }
</script>

<style scoped>
  .movieView .movie-list{
    margin: 1rem 1.5rem 0;
  }
  .movie-head{
    height: 2.6rem;
    line-height: 2.6rem;
    overflow: hidden;
  }
  .movie-head h3{
    float: left;
    font-size: 1.68rem;
    font-weight: 500;
  }
  .movie-head a{
    float: right;
    font-size: 1.4rem;
    color: #42bd56;
  }
  .movie-content{
    box-sizing: border-box;
    margin-top: 1rem;
  }
  .movie-ul{
    overflow-x: auto;
    white-space: nowrap;
    text-align: center;
  }
  .movie-ul li:first-child{
    margin-left: 0;
  }
  .movie-ul li{
    width: 10rem;
    margin-left: 1rem;
    display: inline-block;
  }
  .movie-ul img{
    height: 15rem;
  }
  .movie-ul .title{
    display: block;
    max-width: 100%;
    margin-top: 1rem;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: #111;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -ms-word-wrap: normal;
    word-wrap: normal;
  }
  .rating{
    margin-top: 0.4rem;
    font-size: 1.4rem;
    color: #aaa;
    text-align: right;
  }
</style>
