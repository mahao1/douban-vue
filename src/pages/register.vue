<template>
  <div class="register has-main layout">
    <div class="form">
      <div class="form-user">
        <input type="text" placeholder="用户名" class="user" v-model="userText" @keyup.enter="register">
      </div>
      <div class="form-pwd">
        <input type="password" placeholder="密码" class="pwd" v-model="pwdText" @keyup.enter="register">
      </div>
      <div class="register-btn">
        <button type="submit" class="submit" @click="register">注册</button>
      </div>
    </div>
    <div class="footer">
      <router-link to="login" class="to-other">
        已经注册，前往登录
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "register",
    data(){
      return{
        userText: '',
        pwdText: '',
        dataInfo: {}
      }
    },
    mounted(){

    },
    methods: {
      register(){
        var str = /^[a-zA-Z]\w{5,17}$/;
        if(this.userText.length == 0 || this.pwdText.length == 0){
          this.$message.error('用户名或密码不能为空');
        }else{
          if(!str.test(this.userText) && !str.test(this.pwdText)){
            this.$message.error('用户名或密码以字母开头，长度在6-18之间，只能包含字符、数字和下划线。');
          }else{
            this.$message.success('注册成功');
            localStorage.setItem('user', this.userText);
            localStorage.setItem('pwd', this.pwdText);
          }
        }
      }
    }
  }
</script>

<style scoped>
  .register .form{
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
