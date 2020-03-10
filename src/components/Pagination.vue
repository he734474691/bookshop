<template>
  <div class="pagination">
    <span class="total">共{{ total }}条/{{ pages }}页</span>
    <span class="pageDown">下一页</span>
    <span class="page"></span>
    <span class="pageUp">上一页</span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      total: this.number,
      pages: Math.ceil(this.number / 30)
    };
  },
  props: ["number"],
  created() {}
};
</script>

<style>
.pagination {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 100px;
}
</style>
