// Imports
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import AddCategory from "./views/AddCategory";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/add-a-category", name: "AppContent", component: AddCategory },
  ],
});
