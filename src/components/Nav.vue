<template>
  <div class="nav">
    <div class="contentheader">
      <ul class=" clearfix">
        <li><span>11</span></li>
        <li><span>11</span></li>
        <li><span>11</span></li>
        <li><span>11</span></li>
        <li><span>11</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contentheader {
  box-shadow: 0 0 8px rgb(153, 153, 153);
  background-color: rgb(127, 255, 255);
  border-radius: 10px;
}
.contentheader li {
  height: 100px;
  width: 190px;
  float: right;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
}
.contentheader li:hover {
  background-color: rgb(85, 214, 214);
}
.nav {
  float: right;
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>
