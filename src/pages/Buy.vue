<template>
  <div>
    <Header />
    <div class="next">
      <Left />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Left from "../components/Left.vue";
import Content from "../components/Content.vue";

export default {
  name: "Buy",
  components: {
    Header,
    Left,
    Content
  },
  data() {
    return {
      name: "未登录",
      totalPage: true
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
body {
  height: 2000px;
}
</style>
