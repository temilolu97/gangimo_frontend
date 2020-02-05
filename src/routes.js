import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home";
import Register from "@/components/Register";
import Dashboard from "@/components/Dashboard";
Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Home,
    meta: { guest: true }
  },
  {
    path: "/login",
    component: Login,
    meta:{
      guest:true
    }
  },
  {
    path: "/register",
    component: Register,
    meta:{
      guest:true
    }
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta:{
      requiresAuth:true
    }
  },

  { path: "*", redirect: "/" }
];

export default routes;
