<template>
  <div class="storeleft">
    <div class="logo"></div>
    <div class="bg">
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
    <div class="top" @click="top">回到顶部</div>
  </div>
</template>

<script>
export default {
  name: "Left",
  data() {
    return {};
  },
  methods: {
    top() {
      let i = 1;
      const totop = setInterval(() => {
        window.scrollTo(0, window.pageYOffset - i);
        if (window.pageYOffset <= 0) {
          clearInterval(totop);
        } else if (window.pageYOffset <= 150) {
          i = 2;
        } else if (window.pageYOffset <= 500) {
          i = 5;
        } else {
          i = 10;
        }
      }, 1);
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

.storeleft .bg li {
  width: 160px;
  height: 50px;
  margin: 5px auto;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 10px;
}
.storeleft .bg {
  width: 162px;
  padding: 5px;
  background-color: rgb(117, 255, 255);
  margin: auto;
  margin-top: 50px;
  box-shadow: 0 0 8px rgb(170, 170, 170);
  border-radius: 10px;
  position: fixed;
}
.storeleft .top {
  width: 170px;
  background-color: rgb(117, 255, 255);
  height: 50px;
  margin: auto;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgb(168, 168, 168);
  position: fixed;
  top: 600px;
  left: 352px;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
.storeleft .top:hover,
.storeleft .bg li:hover {
  background-color: rgb(94, 216, 216);
}
</style>
