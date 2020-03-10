<template>
  <div class="header">
    <div class="w next">
      <div class="headerright">
        <div v-if="headerright">
          <router-link to="/LoginOrRegister?flag=0" tag="a">登陆</router-link>
          <router-link to="/LoginOrRegister?flag=1" tag="a">注册</router-link>
        </div>
        <div v-else>
          <router-link to="/personalCenter" tag="a">个人中心</router-link>
          <a @click.prevent="exit">退出</a>
        </div>
      </div>
      <div class="headerleft">
        <router-link to="/" tag="a">首页</router-link>
        <span>{{ name }}</span>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Router from "vue-router";

export default {
  name: "Header",
  data() {
    return {
      name: "未登录",
      headerright: true,
      params: true,
      show: false
    };
  },
  created() {
    let name = sessionStorage.getItem("name");
    if (name) {
      this.name = "您好，" + name;

      if (name != "未登录") {
        this.headerright = false;
      }
    }
  },
  methods: {
    // tr(flg){
    //     eventBus.$emit("toreg",flg)
    // }
    exit() {
      console.log("2122");
      this.headerright = true;
      this.name = " 未登录";
      sessionStorage.name = "";
    }
  }
};
</script>

<style>
.header {
  width: 100%;
  height: 50px;
  background-color: rgb(236, 236, 236);
  box-shadow: 0 0 8px rgb(126, 126, 126);
  position: fixed;
  left: 0;
  top: 0;
}
.w {
  width: 1200px;
  margin: auto;
}
.headerright {
  float: right;
  padding: 15px 120px 0 0;
}
a {
  text-decoration: none;
  color: black;
  padding-left: 25px;
  cursor: pointer;
}
.headerleft {
  padding: 15px 0 0 150px;
}
.headerleft a {
  margin-right: 20px;
}
</style>
