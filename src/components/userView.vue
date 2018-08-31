<template>
  <div class="userView">
    <div class="card" v-for="(item, index) in arr" :key="index">
      <div class="desc">
        <a href="javascript:;">
          <img :src="item.img" alt="">
        </a>
        <a href="javascript:;" class="note">
          <div class="user-info">
            <strong>{{item.name}}<span>写了日记</span></strong>
            <div class="timestamp">{{item.time | date }}</div>
          </div>
        </a>
      </div>
      <div class="article-card">
        <div class="detail">{{item.diary}}</div>
      </div>
      <div class="info">
        <span class="info-word like" :class="{active: isActive}">
          <i class="iconfont icon-zan" @click="zan($event)"></i>
          <span>{{item.zanNum}}</span>
        </span>
        <span class="info-word comment" @click="openComment">
          <i class="iconfont icon-pinglun"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userView",
    props: ['diaryArr'],
    data(){
      return {
        isActive: false,
        arr:[]//存日记
      }
    },
    watch:{
      diaryArr(){
        this.arr.unshift(this.diaryArr);
        console.log('日记',this.arr);
      }
    },
    mounted(){

    },
    methods: {
      //评论
      openComment(){
        this.$prompt('请输入评论', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType: 'textarea'
        }).then(({ value }) => {
          console.log(value);
          this.$message({
            type: 'success',
            message: '评论成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消评论'
          });
        });
      },
      //赞
      zan(event){
        var event = event || window.event;
        var el = event.target || event.srcElement;//获取当前元素
        var detail = $(el).parents('.card').find('.detail').text();//获取日记内容
        console.log(detail);
        for(var i=0; i< this.arr.length; i++){
          // console.log(i,this.arr[i].diary);
          if(this.arr[i].diary == detail){
            var index = i; //保存索引
            if($(el).hasClass('active') == false){ //判断是否有点赞状态
              this.arr[index].zanNum += 1;
              this.$message.success('点赞成功');
              $(el).addClass('active');
            }else{
              this.$message.warning('已经点过赞了');
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  .card{
    position: relative;
    margin: 2rem 1.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #aaa;
  }
  .desc{
    overflow: hidden;
  }
  .desc a{
    float: left;
    color: #494949;
  }
  .desc img{
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
  .user-info{
    display: inline-block;
  }
  .user-info strong{
    display: block;
    font-size: 1.7rem;
    line-height: 1;
    margin-bottom: 1rem;
  }
  .user-info strong span{
    color: #aaa;
    font-weight: normal;
    margin-left: 1rem;
  }
  .timestamp{
    font-size: 1.4rem;
  }
  .article-card{
    margin: 1rem 0 2rem 5rem;
    padding: 1.5rem;
    border-radius: 0.2rem;
    border: solid 0.1rem #d8d8d8;
  }
  /*.article-card .title{*/
    /*font-size: 1.7rem;*/
    /*font-weight: 500;*/
    /*line-height: 1.4;*/
    /*color: #494949;*/
    /*margin-bottom: 0.5rem;*/
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
  /*}*/
  .article-card .detail{
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #aaa;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .info{
    margin: 0 0 0 5rem;
    overflow: hidden;
  }
  .info .info-word{
    margin-right: 2rem;
    font-size: 1.6rem;
  }
  .info .comment{
    float: right;
    text-align: right;
    margin-right: 0;
    padding: 0;
    color: #0086b3;
  }
  .active{
    color: #0086b3;
  }
</style>
