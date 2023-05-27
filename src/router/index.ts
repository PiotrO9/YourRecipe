import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/details",
      name: "recipe-details",
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/adding",
      name: "add-recipe",
      component: () => import("../views/AddingRecipeView.vue"),
    },
  ],
});

export default router;
