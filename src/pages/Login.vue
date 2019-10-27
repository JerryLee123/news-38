<template>
  <div class="container">
    <div class="btnClose">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="userName">
      <authInput
        type="text"
        placeholder="请输入手机号"
        rule="^\d{4,16}$"
        err_message="请输入正确手机号"
        @input="setUserName"
      ></authInput>
    </div>
    <div class="userPwd">
      <authInput
        type="password"
        placeholder="请输入密码"
        rule="^\d{3,16}$"
        err_message="请输入正确的密码"
        @input="setUserPwd"
      ></authInput>
    </div>
    <div class="loginBtn">
      <authBtn text="登陆" @send="sendLogin"></authBtn>
    </div>
    <div class="register">
      还没账号？<router-link to="/register">立刻注册</router-link>
    </div>
  </div>
</template>

<script>
import authInput from "../components/authInput";
import authBtn from "../components/authBtn";
export default {
  components: {
    authInput,
    authBtn
  },
  data() {
    return {
      userName: "",
      userPwd: ""
    };
  },
  methods: {
    setUserName(name) {
      this.userName = name;
      console.log(this.userName);
    },
    setUserPwd(password) {
      this.userPwd = password;
    },
    sendLogin() {
      // console.log(`发送${this.userName}和${this.userPwd}`);
      this.$axios({
        url: "/login",
        method: "post",
        data: {
          username: this.userName,
          password: this.userPwd
        }
      }).then(res => {
        // console.log(res.data.statusCode)
        if(!res.data.statusCode){
          this.$toast.success(res.data.message)
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 5.556vw;
  .iconfont {
    font-size: 7.5vw;
  }
  .logo {
    display: flex;
    justify-content: center;
    .iconfont {
      font-size: 35vw;
      color: #d81e06;
    }
  }
  .loginBtn {
    margin-top: 5.556vw;
  }
  .register{
    margin-top: 2.778vw;
    text-align: center;
  }
}
</style>