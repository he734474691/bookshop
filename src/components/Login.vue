<template>
  <div class="lr">
    <div class="loginWrap" v-if="isLogin2">
      <h3>登录</h3>
      <input type="text" placeholder="请输入用户名" v-model="username" />
      <input
        type="password"
        placeholder="请输入密码"
        v-model="password"
        @keyup.enter="userlogin"
      />
      <button @click="userlogin">登录</button>
      <span @click="isLogin2 = false">没有账号？马上注册</span>
    </div>
    <div class="registerWrap" v-else>
      <h3>注册</h3>
      <input type="text" placeholder="请输入用户名" v-model="newUsername" />
      <input type="text" placeholder="请输入密码" v-model="newPassword" />
      <button @click="register">注册</button>
      <span @click="isLogin2 = true">已有账号。马上登录</span>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { login } from "../api/login";

export default {
  name: "Login",
  props: ["flag"],
  data() {
    return {
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      isLogin2: this.flag
    };
  },
  created() {},
  watch: {
    flag(newVal) {
      console.log(newVal);
      this.isLogin2 = newVal;
    }
  },
  methods: {
    userlogin() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        /*接口请求*/
        login(data, res => {
          if (res.data.status) {
            sessionStorage.setItem("isLogin", true);
            sessionStorage.setItem("name", res.data.name);
            this.$router.push("/");
          } else {
            alert("账号或密码错误");
          }
        });
      }
    },
    register() {
      if (this.newUsername == "" || this.newPassword == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.newUsername, password: this.newPassword };
        this.$http
          .post(
            "http://localhost/BookPavilion/index.php/Home/user/register",
            data
          )
          .then(res => {
            console.log(res);
            if (res.data == "ok") {
              this.tishi = "注册成功";
              this.showTishi = true;
              this.username = "";
              this.password = "";
              /*注册成功之后再跳回登录页*/
              setTimeout(
                function() {
                  this.showRegister = false;
                  this.showLogin = true;
                  this.showTishi = false;
                }.bind(this),
                1000
              );
            }
          });
      }
    }
  }
};
</script>

<style>
.lr {
  width: 500px;
}
.loginWrap,
.registerWrap {
  text-align: center;
}
.lr h3 {
  font-size: 30px;
  padding-bottom: 16px;
  color: rgb(90, 90, 90);
}
.lr input {
  display: block;
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin: 0;
  margin: auto;
  margin-bottom: 20px;
  outline: none;
  border: 1px solid rgb(194, 194, 194);
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 5px;
  box-shadow: 0 0 7px rgb(175, 175, 175);
  color: rgb(92, 92, 92);
}
.lr input:focus {
  background-color: rgb(233, 233, 233);
  color: rgb(56, 56, 56);
}
.lr p {
  color: red;
}
.lr button {
  display: block;
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin: 0;
  margin: auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(175, 175, 175);
}
.lr button:hover {
  background-color: #268d5f;
}
.lr span {
  cursor: pointer;
}
.lr span:hover {
  color: #41b883;
}
</style>
