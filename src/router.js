// Imports
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import AddCategory from "./views/AddCategory";
import Developer from "./views/Developer";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/add-a-category", name: "Add Categoru", component: AddCategory },
    { path: "/developer", name: "Developer", component: Developer },
  ],
});
