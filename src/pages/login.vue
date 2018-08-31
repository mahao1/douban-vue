<template>
  <div class="login has-main layout">
    <div class="form">
      <div class="form-user">
        <input type="text" placeholder="用户名" v-model="userText" @keyup.enter="login">
      </div>
      <div class="form-pwd">
        <input type="password" placeholder="密码" v-model="pwdText" @keyup.enter="login">
      </div>
      <div class="login-btn">
        <button type="submit" class="submit" @click="login">登录</button>
      </div>
    </div>
    <div class="footer">
      <router-link to="register" class="to-other">
        还未注册？
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return{
        userText: '',
        pwdText: ''
      }
    },
    mounted(){
      var user = localStorage.getItem('user');
      var pwd = localStorage.getItem('pwd');
      console.log('用户名：'+user,'密码：'+pwd);
      localStorage.setItem('logined', 0);
    },
    methods: {
      login(){
        var user = localStorage.getItem('user');
        var pwd = localStorage.getItem('pwd');
        if(this.userText.length == 0 || this.pwdText.length == 0){
          this.$message.error('用户名或密码不正确');
        }else if(this.userText != user){
          this.$message.error('用户名不正确');
        }else if(this.pwdText != pwd){
          this.$message.error('密码不正确');
        }else{
          this.$message.success('登录成功! 2s后跳转到用户页');
          var that = this;
          setTimeout(function(){
            that.$router.push({name: 'userHome', params: {aid:  that.userText }});//aid为传入的用户名
          },2000);
          localStorage.setItem('logined',1);//设置登录状态
        }
      }
    }
  }
</script>

<style scoped>
  .login .form{
    padding: 2rem 1.5rem;
  }
  .form input{
    display: inline-block;
    width: 100%;
    height: 4.4rem;
    padding: 0 0.8rem;
    box-sizing: border-box;
    font-size: 1.5rem;
    background: #fff;
    border: 0.1rem solid #ccc;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    outline: 0;
    margin-bottom: 1rem;
  }
  .submit{
    cursor: pointer;
    width: 100%;
    padding: 1.2rem 2.6rem;
    margin-top: 1rem;
    font-size: 1.7rem;
    text-align: center;
    color: #fff;
    background: #17AA52;
    border: 0.1rem solid #17AA52;
    border-radius: 0.3rem;
  }
  .to-other{
    display: block;
    font-size: 1.5rem;
    color: #aaa;
    text-align: center;
    cursor: pointer;
  }
</style>
