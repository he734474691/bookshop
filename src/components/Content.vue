<template>
  <div>
    <div class="content">
      <Nav></Nav>
      <div id="content">
        <div class="wrapper">
          <div class="col" v-for="index in number" :key="index">
            {{ list.imgname }},{{ list.imgurl }}
          </div>
        </div>
      </div>
      <Pagination v-bind:number="number" />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Pagination from "../components/Pagination";

export default {
  name: "Content",
  data() {
    return {
      number: 101,
      list: { imgname: "1", imgurl: "fff" }
    };
  },
  components: {
    Nav,
    Pagination
  }
};
</script>

<style>
.content {
  float: right;
  margin-right: 0;
}

.wrapper {
  /* 转化元素类型 */
  display: grid;
  /* 设置网格的间隙 */
  grid-gap: 20px 10px;
  /* 设置每列的尺寸 */
  grid-template-columns: repeat(5, 1fr);
  margin-top: 50px;
  width: 950px;
}
.col {
  height: 250px;
  background: rgb(255, 194, 194);
  box-shadow: 0 0 10px rgb(126, 126, 126);
  border-radius: 10px;
  cursor: pointer;
}
</style>
