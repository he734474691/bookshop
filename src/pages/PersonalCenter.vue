<template>
  <div>
    <Header />
    <div class="next">
      <Nav></Nav>
      <div class="storeleft">
        <div class="logo"></div>
        <div class="list">
          <ul>
            <li>账户概况</li>
            <li>我的订单</li>
            <li>购物车</li>
            <li>图书发售上传</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Nav from "../components/Nav";

export default {
  name: "PersonalCenter",
  components: {
    Header,
    Nav
  },
  data() {
    return {
      name: "未登录"
    };
  },
  mounted() {
    let name = sessionStorage.getItem("name");
    if (name) {
      this.name = name;
    }
  }
};
</script>

<style>
.storeleft .logo {
  width: 230px;
  height: 100px;
  margin: auto;
  margin-top: 100px;
}
.storeleft {
  width: 180px;
  float: left;
}

.list li {
  width: 160px;
  height: 50px;
  margin: 5px auto;
  border: 1px solid black;
}
.list {
  width: 162px;
  padding: 5px;
  background-color: rgb(117, 255, 255);
  margin: auto;
  margin-top: 50px;
  box-shadow: 0 0 8px rgb(141, 141, 141);
  border-radius: 10px;
}
</style>
