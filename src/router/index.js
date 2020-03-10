import Vue from "vue";

import Router from "vue-router";

import Buy from "../pages/Buy"; //首页

import LoginOrRegister from "../pages/LoginOrRegister"; //登录页

import Login from "../components/Login";

import PersonalCenter from "../pages/PersonalCenter"; //个人中心

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Buy",
      component: Buy
    },
    {
      path: "/LoginOrRegister",
      component: LoginOrRegister,
      children: [
        {
          path: "Login",
          name: "Login",
          component: Login
        }
      ]
    },
    {
      path: "/PersonalCenter",
      component: PersonalCenter,
      name: PersonalCenter
    }
  ]
});
