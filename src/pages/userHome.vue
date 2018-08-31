<template>
  <div class="userHome">
    <div class="user-bar">
      <div class="user-img" @click.stop="uploadHeadImg">
        <img :src="imgSrc" alt="">
        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" v-if="show"/>
      </div>
      <div class="holder">
        <span class="user-info" @click="isLogin">{{username}}</span>
        <span class="edit" v-show="show" @click="toLogin">[退出]</span>
      </div>

      <div class="icon" @click="openDiary">
        <i class="iconfont icon-evaluate-jf"></i>
      </div>
    </div>
    <userView :diaryArr="diaryArr"></userView>
  </div>
</template>

<script>
  import userView from '../components/userView'
  export default {
    name: "userHome",
    data() {
      return {
        show: false,//登录显示退出
        username: '',
        imgSrc: '../../static/images/bk.jpg',//默认头像
        diaryArr: {}
      }
    },
    components: {
      userView
    },
    watch: {
      username(){
        console.log('是否变化',this.username);
      },
      imgSrc(){
        // console.log('头像',this.imgSrc);
        // localStorage.setItem('img', this.imgSrc);
      }
    },
    created(){
      // 存在 localStorage 登录后 的缓存内容
      if (localStorage.logined == 1) {
        console.log('页面有缓存',localStorage);
        console.log('是否有日记', this.diaryArr);
        this.imgSrc = localStorage.avatar;
      }else {
        // 页面无缓存内容时，初始化数据并写入缓存
        // this.initData()
        console.log('页面无缓存',this.initData)
      }
    },
    mounted() {
      if(localStorage.logined == 1){
        this.username = localStorage.user;
        this.show = !this.show;
      }else{
        this.username = '请先登录';
      }
    },
    methods: {
      // 打开图片上传
      uploadHeadImg() {
        if(localStorage.logined == 1){
          this.$el.querySelector('.hiddenInput').click();
        }else{
          this.$message.warning('登录后才可以上传头像哦！');
        }
      },
      handleFile(e) {
        let $target = e.target || e.srcElement;//表示调用他的各种属性
        let file = $target.files[0];//表示取第一张图
        let reader = new FileReader();//FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。
        reader.onload = (data) => {//onload 事件会在页面或图像加载完成后立即发生
          let res = data.target || data.srcElement;
          this.imgSrc = res.result;
          localStorage.setItem('avatar', res.result);//头像
        }
        reader.readAsDataURL(file);//FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL。
      },
      //判断是否登录
      isLogin() {
        if (localStorage.logined == 1) {//logined为1是登录
          console.log('登录了');
        } else {
          this.$router.push({name: 'login'});
        }
      },
      //退出进入登录页
      toLogin() {
        localStorage.setItem('logined', 0);
        this.$router.push({name: 'login'});
      },
      //写日记
      openDiary: function(){
        if (localStorage.logined == 1) {//logined为1是登录
          this.$prompt('发表日记', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputType: 'textarea'
          }).then(({value}) => {
            this.$message({
              type: 'success',
              message: '发表成功'
            });
            this.diaryArr={
              name: this.username,
              img: this.imgSrc,//默认头像
              diary: value,//日记
              time: new Date(),
              zanNum: 0
            }
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消发表'
            });
          });
        } else {
          this.$message({
            type: 'warning',
            message: '请先登录后再发表日记。'
          });
        }
      }
    }
  }
</script>

<style scoped>
  .user-bar {
    position: relative;
    padding: 1rem 1.5rem;
    overflow: hidden;
    border-bottom: 1px solid #aaa;
    display: block;
  }

  .user-img {
    width: 4rem;
    height: 4rem;
    float: left;
  }

  .user-img img {
    width: 100%;
    height: 100%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .hiddenInput {
    display: none;
  }

  .holder {
    float: left;
    padding-left: 1rem;
    line-height: 4rem;
    font-size: 1.6rem;
    color: #aaa;
    cursor: pointer;
  }

  .edit {
    margin-right: 2rem;
    color: #17AA52;
  }

  .icon {
    content: '';
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    float: right;
    box-sizing: border-box;
  }

</style>
