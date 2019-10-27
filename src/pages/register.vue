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
    <div class="nickName">
      <authInput type="text" placeholder="请输入昵称" @input="setNickName"></authInput>
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
    <div class="registerBtn">
      <authBtn text="注册" @send="sendRegister"></authBtn>
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
      userPwd: "",
      nickName: ""
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
    setNickName(name) {
      this.nickName = name;
    },
    sendRegister() {
      this.$axios({
        url: "/register",
        method: "post",
        data: {
          username: this.userName,
          nickname: this.nickName,
          password: this.userPwd
        }
      }).then(res => {
        if (!res.data.statusCode) {
          this.$toast.success(res.data.message);
          setTimeout(() => {
            this.$router.push({
              path: "/login"
            })
          }, 1000)
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
  .register {
    margin-top: 2.778vw;
    text-align: center;
  }
}
</style>