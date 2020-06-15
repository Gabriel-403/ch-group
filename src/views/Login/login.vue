<template>
  <div class="container">
    <div class="main-bg" :style="bg"></div>

    <main class="login-box">
      <div class="blur-bg" :style="bg"></div>
      <div class="login-content">
        <h1>LOGIN</h1>

        <el-form status-icon ref="ruleForm" label-width="60px">
          <el-form-item label="账号:" prop="pass">
            <el-input type="text" autocomplete="off" v-model="account"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="checkPass">
            <el-input type="password" autocomplete="off" v-model="passwords"></el-input>
          </el-form-item>
          <el-form-item label="验证码:" prop="age">
            <el-input v-model="yanzhengma"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button @click="rewrite">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script>
/* eslint-disable-next-line */
import axios from "../../utils/request.js";

export default {
  data() {
    return {
      bg: {
        backgroundImage: "url(" + require("../../assets/bg1049a.png") + ")"
      },
      account: "",
      passwords: "",
      yanzhengma: ""
    };
  },
  methods: {
    submit() {
      axios.get("/checkLogin", {
        params: { a: 1 }
      });
      axios.post("/checkLogin", {
        data: { account: this.account, password: this.passwords }
      });

      this.$router.push('/home')
    },

    rewrite() {
      this.account = "";
      this.passwords = "";
    }
  }
};
</script>

<style lang="css" scoped >


.el-aside {
  color: rgb(237, 88, 24);
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.el-form {
  margin: 30px 0px -10px 40px;
}

.login-box >>> .el-input__inner {
  width: 85%;
  background-color: rgba(255, 255, 255, 0.15);
}
.login-box >>> .el-form-item__content {
  margin-right: 40px;
}
</style>
<style lang="less" scoped>
.main-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.login-box {
  position: relative;
  width: 420px;
  padding: 24px;
  background-color: #ffffff66;
  border-radius: 8px;
  overflow: hidden;

  .blur-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-color: rgba(149, 60, 231, 0.1);
    -webkit-filter: blur(15px) brightness(110%);
    filter: blur(15px) brightness(110%);
  }

  .login-content {
    position: relative;
    z-index: 2;

    h1 {
      font-size:25px;
      color: #520ad8;
      text-align: center;
      


      &::placeholder {
        color: rgb(158, 29, 245);
      }
    }

    button {
      margin: 8px 20px 0;
      color: white;
      background: rgba(255, 255, 255, 0.3);
      border: none;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: 0.4s;

      &::before,
      &::after {
        content: "";
        display: block;
        width: 80px;
        height: 100%;
        background: rgba(149, 60, 231, 0.4);
        opacity: 0.8;
        position: absolute;
        left: 0;
        top: 0;
        transform: skewX(-10deg);
        filter: blur(30px);
        overflow: hidden;
        transform: translateX(-100px);
      }
      &::after {
        width: 40px;
        background: rgba(28, 93, 233, 0.4);
        left: 60px;
        filter: blur(5px);
        opacity: 0;
      }

      &:hover {
        background: rgba(157, 33, 240, 0.3);

        &::before,
        &::after {
          transition: 1s;
          transform: translateX(320px);
          opacity: 0.8;
        }
      }
    }
  }
}
</style>