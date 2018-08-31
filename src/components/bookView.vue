<template>
  <div class="bookView">
    <div class="book-list">
      <div class="book-head">
        <h3>最受关注图书｜虚构类</h3>
        <a href="#">更多</a>
      </div>
      <div class="book-content">
        <ul class="book-ul">
          <li>
            <a href="#">
              <img src="https://img3.doubanio.com/view/subject/l/public/s29488272.jpg" alt="">
              <p class="title">倒悬的地平线</p>
              <div class="rating">
                <span>评分：9.0</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img3.doubanio.com/view/subject/l/public/s29488272.jpg" alt="">
              <p class="title">倒悬的地平线</p>
              <div class="rating">
                <span>评分：9.0</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img3.doubanio.com/view/subject/l/public/s29488272.jpg" alt="">
              <p class="title">倒悬的地平线</p>
              <div class="rating">
                <span>评分：9.0</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="book-list">
      <div class="book-head">
        <h3>最受关注图书｜非虚构类</h3>
        <a href="#">更多</a>
      </div>
      <div class="book-content">
        <ul class="book-ul">
          <li>
            <a href="#">
              <img src="https://img3.doubanio.com/view/subject/l/public/s29488272.jpg" alt="">
              <p class="title">倒悬的地平线</p>
              <div class="rating">
                <span>评分：9.0</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img3.doubanio.com/view/subject/l/public/s29488272.jpg" alt="">
              <p class="title">倒悬的地平线</p>
              <div class="rating">
                <span>评分：9.0</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img3.doubanio.com/view/subject/l/public/s29488272.jpg" alt="">
              <p class="title">倒悬的地平线</p>
              <div class="rating">
                <span>评分：9.0</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "bookView"
  }
</script>

<style scoped>
  .bookView .book-list{
    margin: 1rem 1.5rem 0;
  }
  .book-head{
    height: 2.6rem;
    line-height: 2.6rem;
    overflow: hidden;
  }
  .book-head h3{
    float: left;
    font-size: 1.68rem;
    font-weight: 500;
  }
  .book-head a{
    float: right;
    font-size: 1.4rem;
    color: #42bd56;
  }
  .book-content{
    box-sizing: border-box;
    margin-top: 1rem;
  }
  .book-ul{
    overflow-x: auto;
    white-space: nowrap;
    text-align: center;
  }
  .book-ul li:first-child{
    margin-left: 0;
  }
  .book-ul li{
    width: 10rem;
    margin-left: 1rem;
    display: inline-block;
  }
  .book-ul img{
    height: 15rem;
  }
  .book-ul .title{
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
