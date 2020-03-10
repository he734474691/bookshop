<template>
  <div>
    <Header />
    <Login class="lor" :flag="$route.query.flag == 0" />
  </div>
</template>

<script>
import Login from "../components/Login";
// import Register from "../components/Register";
import Header from "../components/Header";

export default {
  name: "LoginOrRegister",
  components: {
    Header,
    Login
    // Register
  },

  props: ["flag"],

  data() {
    return {};
  },

  created() {},
  methods: {}
  // watch(){
  //   console.log(this.methods)
  // }
};
</script>

<style>
.lor {
  position: absolute;
  left: 900px;
  top: 250px;
  background-color: rgb(231, 231, 231);
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 0 20px rgb(175, 175, 175);
}
</style>
